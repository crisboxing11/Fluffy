import fs from 'fs';
import path from 'path';
import {
  LAS_VEGAS_CALL_SEND_TO,
  LAS_VEGAS_PHONE_DISPLAY,
  LAS_VEGAS_TEL_HREF,
  conversionForHref,
} from '../lib/ads';

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), 'utf8');
}

describe('Las Vegas home tap-to-call', () => {
  const home = read('components/Home.tsx');
  const footer = read('components/Layout/Footer.tsx');
  const orlando = read('pages/orlando.tsx');
  const index = read('pages/index.tsx');

  test('the tracked href is the public Las Vegas number', () => {
    expect(LAS_VEGAS_TEL_HREF).toBe('tel:+17025086248');
    expect(LAS_VEGAS_PHONE_DISPLAY).toBe('702-508-6248');
    expect(LAS_VEGAS_CALL_SEND_TO).toBe('AW-10869086002/OKW7CMrh0ZIdELKu5L4o');
    expect(conversionForHref(LAS_VEGAS_TEL_HREF)?.sendTo).toBe(LAS_VEGAS_CALL_SEND_TO);
    expect(LAS_VEGAS_CALL_SEND_TO).not.toContain('XsDHCIHDsr4DELKu5L4o');
  });

  test('homepage hero and footer name both cities without a second hardcoded number', () => {
    expect(home).toContain('callHref: LAS_VEGAS_TEL_HREF');
    expect(home).toContain('callHref: ORLANDO_TEL_HREF');
    expect(home).toContain('bookHref: LAS_VEGAS_BOOKING_HREF');
    expect(home).toContain('bookHref: ORLANDO_BOOKING_HREF');
    expect(home).toContain('callLabel: LAS_VEGAS_CALL_LABEL');
    expect(home).toContain('callLabel: ORLANDO_CALL_LABEL');
    expect(home).toContain('href={market.callHref}');
    expect(footer).toContain('pathname === "/"');
    expect(footer).toContain('showCityChoices');
    expect(footer).toContain('<LocationChoices tone="dark" />');
    expect(footer).toContain('Contact Us for Phone Numbers');

    for (const source of [home, footer]) {
      expect(source).not.toContain('218-517-8083');
      expect(source).not.toContain('2185178083');
      expect(source).not.toContain('407-513-2935');
      expect(source).not.toContain('tel:+14075132935');
      expect(source).not.toContain('XsDHCIHDsr4DELKu5L4o');
    }
  });

  test('hero call matches book hover, press, and reduced motion', () => {
    expect(home).toContain('const heroActionTiming = "0.4s cubic-bezier(0.4, 0, 0.2, 1)"');
    expect(home).toContain('translateY(-3px) scale(1.02)');
    expect(home).toContain('"@media (hover: hover)"');
    expect(home).toContain('"@media (hover: none)"');
    expect(home).toContain('transform: "none !important"');
    expect(home).toContain('"@media (prefers-reduced-motion: reduce)"');
    expect(home).toContain('"&&:active, &&:hover:active"');
    expect(home).toContain('heroPressedSx(bookHeroRestShadow)');
    expect(home).toContain('heroPressedSx(callHeroRestShadow)');
    expect(home).toContain('backgroundColor: "#F4FBFB"');
    expect(home).toContain('boxShadow: callHeroHoverShadow');
    expect(home).toContain('outline: "3px solid #067C92 !important"');
    expect(home).toContain('outlineOffset: "3px !important"');
    expect(home).toContain('border: "2px solid #067C92"');
    expect(home).toContain('border: "2px solid #038B95"');
    expect(home).toContain('heroActionTransition');
  });

  test('homepage why paragraph names both city call links', () => {
    expect(index).toContain('href={LAS_VEGAS_TEL_HREF}');
    expect(index).toContain('href={ORLANDO_TEL_HREF}');
    expect(index).toContain('{LAS_VEGAS_CALL_LABEL}');
    expect(index).toContain('{ORLANDO_CALL_LABEL}');
    expect(index).toContain('<LocationChoices');
    expect(index).toContain('Why Fluffy Pet Wash?');
    expect(index).not.toContain('XsDHCIHDsr4DELKu5L4o');
    expect(index).not.toContain('tel:+14075132935');
    expect(index).not.toContain('218-517-8083');
  });

  test('orlando names both cities through shared actions, not a hardcoded Las Vegas number', () => {
    expect(index).toContain('router.replace("/orlando")');
    expect(orlando).toContain('<LocationChoices');
    expect(orlando).toContain('LAS_VEGAS_TEL_HREF');
    expect(orlando).toContain('ORLANDO_TEL_HREF');
    expect(orlando).not.toContain('tel:+17025086248');
    expect(orlando).not.toContain('702-508-6248');
    expect(orlando).not.toContain('218-517-8083');
    expect(orlando).not.toContain('Book Now!');
    expect(orlando).not.toContain('Book Your Orlando Appointment');
  });
});
