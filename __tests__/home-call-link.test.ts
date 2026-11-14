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

  test('hero and footer use that href, not another number', () => {
    expect(home).toContain('href={LAS_VEGAS_TEL_HREF}');
    expect(home).toContain('Call {LAS_VEGAS_PHONE_DISPLAY}');
    expect(footer).toContain('href={LAS_VEGAS_TEL_HREF}');
    expect(footer).toContain('{LAS_VEGAS_PHONE_DISPLAY}');
    expect(footer).toContain('pathname === "/"');
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

    const book = home.slice(
      home.indexOf('aria-label="Book a grooming appointment"'),
      home.indexOf('Book Your Appointment'),
    );
    const call = home.slice(
      home.indexOf('href={LAS_VEGAS_TEL_HREF}'),
      home.indexOf('Call {LAS_VEGAS_PHONE_DISPLAY}'),
    );
    for (const source of [book, call]) {
      expect(source).toContain('heroActionTransition');
      expect(source).toContain('heroPressedSx');
      expect(source).toContain('outline: "3px solid #067C92 !important"');
      expect(source).toContain('outlineOffset: "3px !important"');
    }
    expect(call).toContain('border: "2px solid #067C92"');
    expect(call).toContain('border: "2px solid #038B95"');
  });

  test('homepage why paragraph uses the shared Las Vegas call link', () => {
    expect(index).toContain('href={LAS_VEGAS_TEL_HREF}');
    expect(index).toContain('{LAS_VEGAS_PHONE_DISPLAY}');
    expect(index).toContain('Why Fluffy Pet Wash?');
    expect(index).not.toContain('XsDHCIHDsr4DELKu5L4o');
    expect(index).not.toContain('tel:+14075132935');
  });

  test('orlando redirect and orlando page are unchanged by this link', () => {
    expect(index).toContain('router.replace("/orlando")');
    expect(orlando).not.toContain('tel:+17025086248');
    expect(orlando).not.toContain('702-508-6248');
    expect(orlando).not.toContain('218-517-8083');
  });
});
