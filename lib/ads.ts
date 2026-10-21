/**
 * Google Ads conversion labels and link matching.
 * GTM-PG7XP5HS may already define dataLayer and gtag. Callers must reuse them.
 *
 * FLAGGED and intentionally kept (do not remove these tags):
 * - G-G17GCFVQT2 is loaded by the GTM container, not configured in this file.
 * - G-YTSZ6NZWP3 is GA4_MEASUREMENT_ID.
 * - AW-17319676855 is EXISTING_GOOGLE_ADS_ID.
 * Book Now and Las Vegas click-to-call stay on AW-10869086002.
 */

export const GTM_ID = 'GTM-PG7XP5HS';

export const GOOGLE_ADS_ID = 'AW-10869086002';

/** GA4 property already used for page views. Kept. */
export const GA4_MEASUREMENT_ID = 'G-YTSZ6NZWP3';

/**
 * Second Ads ID already configured in the app. Kept because it is not
 * Universal Analytics and it is not the same account as AW-10869086002.
 */
export const EXISTING_GOOGLE_ADS_ID = 'AW-17319676855';

export const LAS_VEGAS_TEL_HREF = 'tel:+17025086248';
export const LAS_VEGAS_PHONE_DISPLAY = '702-508-6248';

export const LAS_VEGAS_BOOKING_SEND_TO = 'AW-10869086002/PKrACMfh0ZIdELKu5L4o';
export const LAS_VEGAS_CALL_SEND_TO = 'AW-10869086002/OKW7CMrh0ZIdELKu5L4o';

export const CONVERSION_VALUE = 1.0;
export const CONVERSION_CURRENCY = 'USD';

export const LAS_VEGAS_PHONE_DIGITS = '7025086248';
const LAS_VEGAS_MOEGO_HOST = 'booking.moego.pet';
const LAS_VEGAS_MOEGO_SLUG = 'fluffypetwash';

export type AdsConversion = {
  sendTo: string;
  value: number;
  currency: string;
};

export const BOOK_NOW_CONVERSION: AdsConversion = {
  sendTo: LAS_VEGAS_BOOKING_SEND_TO,
  value: CONVERSION_VALUE,
  currency: CONVERSION_CURRENCY,
};

export const CLICK_TO_CALL_CONVERSION: AdsConversion = {
  sendTo: LAS_VEGAS_CALL_SEND_TO,
  value: CONVERSION_VALUE,
  currency: CONVERSION_CURRENCY,
};

/**
 * Queues commands on the dataLayer GTM already uses. Does not insert a
 * gtag.js script tag. GTM-PG7XP5HS loads gtag.js for G-G17GCFVQT2 only.
 * The config below registers AW-10869086002 on that library, with no
 * conversion label. The library then requests this Ads id once per page.
 * Both this bootstrap and gtm.js load with next/script lazyOnload, so a
 * click that happens first must remain on dataLayer until those scripts run.
 */
export function googleTagBootstrapSource(): string {
  return [
    'window.dataLayer = window.dataLayer || [];',
    'if (typeof window.gtag !== "function") {',
    '  window.gtag = function () { window.dataLayer.push(arguments); };',
    '}',
    `window.gtag("config", ${JSON.stringify(GA4_MEASUREMENT_ID)});`,
    `window.gtag("config", ${JSON.stringify(EXISTING_GOOGLE_ADS_ID)});`,
    `window.gtag("config", ${JSON.stringify(GOOGLE_ADS_ID)});`,
  ].join('\n');
}

export function ensureGtag(): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtagShim() {
      // gtag.js consumes the Arguments object from this shim.
      // Keep the object on the queue so a click before lazyOnload
      // is still sent when GTM installs the real gtag.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }
}

export function isLasVegasMoeGoBookingUrl(href: string): boolean {
  let url: URL;
  try {
    url = new URL(href, 'https://www.fluffypetwash.com');
  } catch {
    return false;
  }

  if (url.protocol !== 'https:' && url.protocol !== 'http:') return false;
  if (url.hostname.toLowerCase() !== LAS_VEGAS_MOEGO_HOST) return false;

  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length < 2) return false;
  if (segments[0].toLowerCase() !== 'ol') return false;
  // Exact slug, so FluffyPetWashOrlando does not match.
  return segments[1].toLowerCase() === LAS_VEGAS_MOEGO_SLUG;
}

export function normalizeTelDigits(href: string): string | null {
  const trimmed = href.trim();
  if (!/^tel:/i.test(trimmed)) return null;

  const withoutScheme = trimmed.replace(/^tel:/i, '');
  const beforeParams = withoutScheme.split(/[?;]/)[0];
  let decoded = beforeParams;
  try {
    decoded = decodeURIComponent(beforeParams);
  } catch {
    decoded = beforeParams;
  }

  const digits = decoded.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) return digits.slice(1);
  return digits;
}

export function isLasVegasClickToCall(href: string): boolean {
  return normalizeTelDigits(href) === LAS_VEGAS_PHONE_DIGITS;
}

export function conversionForHref(href: string): AdsConversion | null {
  if (isLasVegasMoeGoBookingUrl(href)) return BOOK_NOW_CONVERSION;
  if (isLasVegasClickToCall(href)) return CLICK_TO_CALL_CONVERSION;
  return null;
}

const claimedClicks = new WeakSet<object>();
let lasVegasFormBookNowSent = false;

/**
 * A newly mounted prebook form starts a journey. Direct MoeGo clicks do not
 * set this flag, so each of those clicks can convert on its own.
 */
export function beginLasVegasBookingJourney(): void {
  lasVegasFormBookNowSent = false;
}

/**
 * One Book Now conversion for this form journey. A second submit is ignored
 * until the form mounts again.
 */
export function sendLasVegasBookNowConversion(
  send: (conversion: AdsConversion) => void = sendAdsConversion,
): boolean {
  if (lasVegasFormBookNowSent) return false;
  lasVegasFormBookNowSent = true;
  try {
    send(BOOK_NOW_CONVERSION);
    return true;
  } catch {
    return false;
  }
}

/**
 * Records one conversion for this click event. A second call with the same
 * event (nested targets, or a duplicate listener) does not send again.
 */
export function trackAdsClick(
  event: object,
  href: string | null,
  send: (conversion: AdsConversion) => void = sendAdsConversion,
): boolean {
  if (claimedClicks.has(event)) return false;
  claimedClicks.add(event);

  if (!href) return false;
  const conversion = conversionForHref(href);
  if (!conversion) return false;

  if (conversion.sendTo === LAS_VEGAS_BOOKING_SEND_TO && lasVegasFormBookNowSent) {
    return false;
  }

  try {
    send(conversion);
  } catch {
    return false;
  }
  return true;
}

export function sendAdsConversion(conversion: AdsConversion): void {
  if (typeof window === 'undefined') return;

  try {
    ensureGtag();
    window.gtag('event', 'conversion', {
      send_to: conversion.sendTo,
      value: conversion.value,
      currency: conversion.currency,
      transport_type: 'beacon',
    });
  } catch {
    // A blocked or missing tag must not affect the click.
  }
}
