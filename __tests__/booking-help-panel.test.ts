import fs from 'fs';
import path from 'path';
import {
  CLICK_TO_CALL_CONVERSION,
  LAS_VEGAS_PHONE_DISPLAY,
  LAS_VEGAS_TEL_HREF,
  conversionForHref,
  isLasVegasClickToCall,
  trackAdsClick,
} from '../lib/ads';

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), 'utf8');
}

const HELP_HEADING = 'Not seeing appointment times?';
const HELP_BODY =
  'Your address may be outside our service area, or no online appointments may be available for your selections. Call your location and we\u2019ll help check.';

describe('booking help panel', () => {
  const booking = read('pages/booking.tsx');
  const contact = read('pages/contact.tsx');
  const prebook = read('pages/prebook.tsx');
  const adsClicks = read('lib/adsClicks.ts');
  const app = read('pages/_app.tsx');
  const panel = booking.slice(
    booking.indexOf(HELP_HEADING),
    booking.indexOf('<iframe'),
  );

  test('uses the approved heading and body above the embedded form', () => {
    expect(booking.indexOf(HELP_HEADING)).toBeGreaterThan(-1);
    expect(booking.indexOf(HELP_BODY)).toBeGreaterThan(booking.indexOf(HELP_HEADING));
    expect(booking.indexOf(HELP_BODY)).toBeLessThan(booking.indexOf('<iframe'));
    expect(panel).toContain(HELP_BODY);
    expect(panel).not.toContain('role="alert"');
    expect(panel).not.toContain('aria-live');
    expect(panel).not.toContain('Edit address');
    expect(panel).not.toContain('Change date');
  });

  test('pairs each city with the number already used on the site', () => {
    expect(LAS_VEGAS_PHONE_DISPLAY).toBe('702-508-6248');
    expect(LAS_VEGAS_TEL_HREF).toBe('tel:+17025086248');
    expect(contact).toContain('tel:+14075132935');
    expect(contact).toContain('(407) 513-2935');
    expect(prebook).toContain('tel:+17025086248');
    expect(prebook).toContain('tel:+14075132935');
    expect(prebook).toContain('(407) 513-2935');

    expect(panel).toContain('Las Vegas: {LAS_VEGAS_PHONE_DISPLAY}');
    expect(panel).toContain('href={LAS_VEGAS_TEL_HREF}');
    expect(panel).toContain('Orlando: (407) 513-2935');
    expect(panel).toContain('href="tel:+14075132935"');
    expect(panel).toContain('minHeight: 48');
    expect(panel).toContain('flexDirection: { xs: "column", sm: "row" }');
    expect(panel).toContain('"&:focus-visible"');
  });

  test('keeps Las Vegas call conversion on the existing listener', () => {
    const send = jest.fn();

    expect(conversionForHref(LAS_VEGAS_TEL_HREF)).toEqual(CLICK_TO_CALL_CONVERSION);
    expect(isLasVegasClickToCall('tel:+14075132935')).toBe(false);
    expect(trackAdsClick({}, LAS_VEGAS_TEL_HREF, send)).toBe(true);
    expect(trackAdsClick({}, 'tel:+14075132935', send)).toBe(false);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(CLICK_TO_CALL_CONVERSION);

    expect(app).toContain('installAdsClickListener');
    expect(adsClicks).toContain('trackAdsClick');
    expect(adsClicks).toContain('without calling preventDefault');
    expect(adsClicks).not.toContain('.preventDefault(');
    expect(booking).not.toContain("gtag('event'");
    expect(booking).not.toContain('sendAdsConversion');
    expect(booking).not.toContain('sendLasVegasBookNowConversion');
    expect(booking).toContain('src={bookingUrl}');
    expect(booking).toContain('setBookingUrl(territory.bookingUrl)');
  });
});
