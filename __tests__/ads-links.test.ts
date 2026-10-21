import fs from 'fs';
import path from 'path';
import {
  BOOK_NOW_CONVERSION,
  CLICK_TO_CALL_CONVERSION,
  GA4_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  conversionForHref,
  ensureGtag,
  googleTagBootstrapSource,
  isLasVegasClickToCall,
  isLasVegasMoeGoBookingUrl,
  normalizeTelDigits,
  beginLasVegasBookingJourney,
  sendAdsConversion,
  sendLasVegasBookNowConversion,
  trackAdsClick,
} from '../lib/ads';

describe('Las Vegas MoeGo booking URLs', () => {
  const matches = [
    'https://booking.moego.pet/ol/FLUFFYPETWASH/book',
    'https://booking.moego.pet/ol/FLUFFYPETWASH/book?utm_medium=embed',
    'https://booking.moego.pet/ol/FLUFFYPETWASH/landing',
    'https://booking.moego.pet/ol/FLUFFYPETWASH',
    'https://booking.moego.pet/ol/FLUFFYPETWASH/',
    'http://booking.moego.pet/ol/fluffypetwash/book',
    'https://booking.moego.pet/ol/FLUFFYPETWASH/book#times',
  ];

  test.each(matches)('matches %s', (href) => {
    expect(isLasVegasMoeGoBookingUrl(href)).toBe(true);
    expect(conversionForHref(href)?.sendTo).toBe(BOOK_NOW_CONVERSION.sendTo);
  });

  const excluded = [
    'https://booking.moego.pet/ol/FluffyPetWashOrlando/book',
    'https://booking.moego.pet/ol/FluffyPetWashOrlando/book?utm_medium=embed',
    'https://booking.moego.pet/ol/FluffyPetWashOrlando/landing',
    'https://booking.moego.pet/ol/fluffypetwas/book',
    'https://booking.moego.pet/ol/FLUFFYPETWASHOrlando/book',
    'https://form.moego.pet/go/form?formId=4f1eef34a5ed478fb0732d01a8239453',
    'https://booking.moego.pet/ol/OTHER/book',
    'https://www.booking.moego.pet/ol/FLUFFYPETWASH/book',
    'https://fluffypetwash.com/prebook',
    'https://www.fluffypetwash.com/booking?location=Las%20Vegas%2C%20Nevada',
    '/prebook',
    '/booking?location=Las%20Vegas%2C%20Nevada',
    'mailto:contact@fluffypetwash.com',
    '',
  ];

  test.each(excluded)('does not match %s', (href) => {
    expect(isLasVegasMoeGoBookingUrl(href)).toBe(false);
    expect(conversionForHref(href)?.sendTo).not.toBe(BOOK_NOW_CONVERSION.sendTo);
  });
});

describe('click-to-call phone normalisation', () => {
  const lasVegas = [
    'tel:7025086248',
    'tel:+17025086248',
    'tel:702-508-6248',
    'tel:+1-702-508-6248',
    'tel:(702) 508-6248',
    'tel:+1 (702) 508-6248',
    'tel:702.508.6248',
    'tel:1-702-508-6248',
    'TEL:+1-702-508-6248',
    'tel:702%20508%206248',
  ];

  test.each(lasVegas)('matches %s', (href) => {
    expect(normalizeTelDigits(href)).toBe('7025086248');
    expect(isLasVegasClickToCall(href)).toBe(true);
    expect(conversionForHref(href)).toEqual(CLICK_TO_CALL_CONVERSION);
  });

  const orlandoAndOthers = [
    'tel:4075132935',
    'tel:+14075132935',
    'tel:407-513-2935',
    'tel:+1-407-513-2935',
    'tel:(407) 513-2935',
    'tel:+1 (407) 513-2935',
    'tel:8889988381',
    'tel:702508624',
    'tel:70250862480',
    'https://booking.moego.pet/ol/FLUFFYPETWASH/book',
    'mailto:contact@fluffypetwash.com',
    '7025086248',
    '',
  ];

  test.each(orlandoAndOthers)('does not match %s', (href) => {
    expect(isLasVegasClickToCall(href)).toBe(false);
    expect(conversionForHref(href)?.sendTo).not.toBe(CLICK_TO_CALL_CONVERSION.sendTo);
  });
});

describe('one click sends one conversion', () => {
  beforeEach(() => {
    beginLasVegasBookingJourney();
  });

  test('a repeated event does not send twice', () => {
    const event = {};
    const send = jest.fn();
    const href = 'https://booking.moego.pet/ol/FLUFFYPETWASH/book';

    expect(trackAdsClick(event, href, send)).toBe(true);
    expect(trackAdsClick(event, href, send)).toBe(false);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(BOOK_NOW_CONVERSION);
  });

  test('orlando and the 407 number do not send', () => {
    const send = jest.fn();
    trackAdsClick(
      {},
      'https://booking.moego.pet/ol/FluffyPetWashOrlando/book',
      send,
    );
    trackAdsClick({}, 'tel:+14075132935', send);
    expect(send).not.toHaveBeenCalled();
  });

  test('missing gtag does not throw', () => {
    expect(() => sendAdsConversion(CLICK_TO_CALL_CONVERSION)).not.toThrow();
  });

  test('double submit in one journey sends one Book Now conversion', () => {
    const send = jest.fn();
    expect(sendLasVegasBookNowConversion(send)).toBe(true);
    expect(sendLasVegasBookNowConversion(send)).toBe(false);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(BOOK_NOW_CONVERSION);
  });

  test('submit followed by a direct anchor sends one Book Now conversion', () => {
    const send = jest.fn();
    expect(sendLasVegasBookNowConversion(send)).toBe(true);
    expect(
      trackAdsClick(
        {},
        'https://booking.moego.pet/ol/FLUFFYPETWASH/book',
        send,
      ),
    ).toBe(false);
    expect(send).toHaveBeenCalledTimes(1);
  });

  test('a new form mount after leaving the page sends a second conversion', () => {
    const send = jest.fn();
    expect(sendLasVegasBookNowConversion(send)).toBe(true);
    beginLasVegasBookingJourney();
    expect(sendLasVegasBookNowConversion(send)).toBe(true);
    expect(send).toHaveBeenCalledTimes(2);
  });

  test('direct MoeGo clicks each fire when no form was submitted', () => {
    const send = jest.fn();
    const href = 'https://booking.moego.pet/ol/FLUFFYPETWASH/book';
    expect(trackAdsClick({}, href, send)).toBe(true);
    expect(trackAdsClick({}, href, send)).toBe(true);
    expect(send).toHaveBeenCalledTimes(2);
  });

  test('Orlando booking does not consume the Las Vegas conversion', () => {
    const send = jest.fn();
    expect(
      trackAdsClick(
        {},
        'https://booking.moego.pet/ol/FluffyPetWashOrlando/book?utm_medium=embed',
        send,
      ),
    ).toBe(false);
    expect(sendLasVegasBookNowConversion(send)).toBe(true);
    expect(send).toHaveBeenCalledTimes(1);
  });

  test('a call click still fires after Book Now', () => {
    const send = jest.fn();
    sendLasVegasBookNowConversion(send);
    expect(trackAdsClick({}, 'tel:+17025086248', send)).toBe(true);
    expect(send).toHaveBeenNthCalledWith(2, CLICK_TO_CALL_CONVERSION);
  });
});

describe('gtag bootstrap', () => {
  const source = googleTagBootstrapSource();

  test('configs AW-10869086002 once and does not load another gtag.js', () => {
    expect(source).not.toContain('googletagmanager.com/gtag/js');
    expect(source).not.toContain('event_callback');
    expect(source).not.toContain('window.location');
    expect(source).not.toContain('XsDHCIHDsr4DELKu5L4o');
    expect(source).not.toContain(`${GOOGLE_ADS_ID}/`);

    const configs = source.match(/window\.gtag\("config", "[^"]+"\)/g);
    expect(configs).toEqual([
      `window.gtag("config", "${GA4_MEASUREMENT_ID}")`,
      'window.gtag("config", "AW-17319676855")',
      'window.gtag("config", "AW-10869086002")',
    ]);

    const app = fs.readFileSync(path.join(process.cwd(), 'pages/_app.tsx'), 'utf8');
    const ads = fs.readFileSync(path.join(process.cwd(), 'lib/ads.ts'), 'utf8');
    const booking = fs.readFileSync(path.join(process.cwd(), 'pages/booking.tsx'), 'utf8');
    const policy = fs.readFileSync(path.join(process.cwd(), 'pages/privacy-policy.tsx'), 'utf8');
    expect(app).not.toContain('googletagmanager.com/gtag/js');
    expect(ads).not.toContain('googletagmanager.com/gtag/js');
    expect(ads).not.toContain('XsDHCIHDsr4DELKu5L4o');
    expect(ads).not.toContain('loads gtag.js for AW-10869086002');
    expect(booking).not.toContain('ads_conversion_Book_appointment_1');
    expect(booking).not.toContain("gtag('event'");
    expect(policy).not.toContain('booking page also sends a booking conversion event');
  });

  test('reuses an existing dataLayer and gtag instead of replacing them', () => {
    expect(source).toContain('window.dataLayer = window.dataLayer || [];');
    expect(source).not.toContain('window.dataLayer = [];');
    expect(source).toContain('if (typeof window.gtag !== "function")');
    expect(source).not.toMatch(/function gtag\s*\(/);
  });

  test('keeps the GA4 id and the other Ads id already in the app', () => {
    expect(source).toContain(`window.gtag("config", "${GA4_MEASUREMENT_ID}")`);
    expect(source).toContain('window.gtag("config", "AW-17319676855")');
  });

  test('queues on the existing dataLayer when gtag is missing', () => {
    const dataLayer: unknown[] = [{ existing: true }];
    const fakeWindow = { dataLayer } as unknown as Window & typeof globalThis;
    (global as unknown as { window: Window }).window = fakeWindow;

    sendAdsConversion(CLICK_TO_CALL_CONVERSION);

    expect(fakeWindow.dataLayer?.[0]).toEqual({ existing: true });
    expect(fakeWindow.dataLayer?.length).toBe(2);
    const queued = fakeWindow.dataLayer?.[1] as IArguments;
    expect(queued[0]).toBe('event');
    expect(queued[1]).toBe('conversion');
    expect(queued[2]).toMatchObject({
      send_to: CLICK_TO_CALL_CONVERSION.sendTo,
      transport_type: 'beacon',
    });

    delete (global as unknown as { window?: Window }).window;
  });

  test('does not replace a gtag GTM already defined', () => {
    const dataLayer: unknown[] = ['gtm'];
    const gtag = jest.fn();
    const fakeWindow = { dataLayer, gtag } as unknown as Window;
    (global as unknown as { window: Window }).window = fakeWindow;

    ensureGtag();
    sendAdsConversion(BOOK_NOW_CONVERSION);

    expect(fakeWindow.gtag).toBe(gtag);
    expect(fakeWindow.dataLayer).toBe(dataLayer);
    expect(dataLayer[0]).toBe('gtm');
    expect(gtag).toHaveBeenCalledWith(
      'event',
      'conversion',
      expect.objectContaining({
        send_to: BOOK_NOW_CONVERSION.sendTo,
        transport_type: 'beacon',
      }),
    );

    delete (global as unknown as { window?: Window }).window;
  });
});
