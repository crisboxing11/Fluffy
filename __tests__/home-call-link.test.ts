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
    expect(home).toContain('<LocationChoices');
    expect(home).toContain('href={LAS_VEGAS_TEL_HREF}');
    expect(home).toContain('href={ORLANDO_TEL_HREF}');
    expect(home).toContain('href={LAS_VEGAS_BOOKING_HREF}');
    expect(home).toContain('href={ORLANDO_BOOKING_HREF}');
    expect(home).toContain('{LAS_VEGAS_CALL_LABEL}');
    expect(home).toContain('{ORLANDO_CALL_LABEL}');
    expect(footer).toContain('pathname === "/"');
    expect(footer).toContain('showCityChoices');
    expect(footer).toContain('<LocationChoices tone="dark" showEmail />');
    expect(footer).toContain('Contact Us for Phone Numbers');

    for (const source of [home, footer]) {
      expect(source).not.toContain('218-517-8083');
      expect(source).not.toContain('2185178083');
      expect(source).not.toContain('407-513-2935');
      expect(source).not.toContain('tel:+14075132935');
      expect(source).not.toContain('XsDHCIHDsr4DELKu5L4o');
    }
  });

  test('city actions keep a visible focus ring and do not use a stacked card layout', () => {
    const choices = read('components/LocationChoices.tsx');
    expect(choices).toContain('gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)"');
    expect(choices).toContain('"&&:focus-visible"');
    expect(choices).toContain('? "3px solid #FFFFFF !important"');
    expect(choices).toContain(': "3px solid #067C92 !important"');
    expect(choices).not.toContain('borderRadius: "20px"');
    expect(home).not.toContain('heroCities');
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
