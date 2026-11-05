import {
  LAS_VEGAS_PHONE_DISPLAY,
  LAS_VEGAS_TEL_HREF,
  ORLANDO_PHONE_DISPLAY,
  ORLANDO_TEL_HREF,
} from './ads';

export {
  LAS_VEGAS_PHONE_DISPLAY,
  LAS_VEGAS_TEL_HREF,
  ORLANDO_PHONE_DISPLAY,
  ORLANDO_TEL_HREF,
};

export const LAS_VEGAS_EMAIL = 'contact@fluffypetwash.com';
export const ORLANDO_EMAIL = 'orlando@fluffypetwash.com';

/**
 * Territory names from data/territories.ts. /booking reads this query and
 * opens that market's existing MoeGo calendar. /prebook still asks the
 * visitor to pick a city, so these links name the city in the label and
 * in the destination.
 */
export const LAS_VEGAS_LOCATION_NAME = 'Las Vegas, Nevada';
export const ORLANDO_LOCATION_NAME = 'Orlando, Florida';

export const LAS_VEGAS_BOOKING_HREF = `/booking?location=${encodeURIComponent(LAS_VEGAS_LOCATION_NAME)}`;
export const ORLANDO_BOOKING_HREF = `/booking?location=${encodeURIComponent(ORLANDO_LOCATION_NAME)}`;

export const LAS_VEGAS_BOOK_LABEL = 'Book a Las Vegas appointment';
export const ORLANDO_BOOK_LABEL = 'Book an Orlando appointment';
export const LAS_VEGAS_CALL_LABEL = `Call Las Vegas: ${LAS_VEGAS_PHONE_DISPLAY}`;
export const ORLANDO_CALL_LABEL = `Call Orlando: ${ORLANDO_PHONE_DISPLAY}`;
