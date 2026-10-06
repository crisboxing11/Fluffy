import {
  BOOK_NOW_CONVERSION,
  CLICK_TO_CALL_CONVERSION,
  GA4_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  GTAG_JS_SRC,
  conversionForHref,
  googleTagBootstrapSource,
  isLasVegasClickToCall,
  isLasVegasMoeGoBookingUrl,
  normalizeTelDigits,
  sendAdsConversion,
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
});

describe('gtag bootstrap', () => {
  const source = googleTagBootstrapSource();

  test('loads AW-10869086002 from one gtag.js url and configs it once', () => {
    expect(GTAG_JS_SRC).toBe(
      'https://www.googletagmanager.com/gtag/js?id=AW-10869086002',
    );
    expect(source.match(/AW-10869086002/g)).toEqual([GOOGLE_ADS_ID]);
    expect(source).toContain(`window.gtag("config", "${GOOGLE_ADS_ID}")`);
    expect(source).not.toContain('event_callback');
    expect(source).not.toContain('window.location');
  });

  test('reuses an existing dataLayer and gtag instead of replacing them', () => {
    expect(source).toContain('window.dataLayer = window.dataLayer || [];');
    expect(source).not.toContain('window.dataLayer = [];');
    expect(source).toContain('if (typeof window.gtag !== "function")');
    expect(source).not.toMatch(/function gtag\s*\(/);
  });

  test('keeps the GA4 id that the app already uses', () => {
    expect(source).toContain(`window.gtag("config", "${GA4_MEASUREMENT_ID}")`);
    expect(source).toContain('window.gtag("config", "AW-17319676855")');
  });
});
