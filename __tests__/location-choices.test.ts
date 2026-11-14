import fs from 'fs';
import path from 'path';
import territories from '../data/territories';
import { posted } from '../data/posted';
import {
  LAS_VEGAS_CALL_SEND_TO,
  conversionForHref,
} from '../lib/ads';
import {
  LAS_VEGAS_BOOKING_HREF,
  LAS_VEGAS_BOOK_LABEL,
  LAS_VEGAS_CALL_LABEL,
  LAS_VEGAS_EMAIL,
  LAS_VEGAS_LOCATION_NAME,
  LAS_VEGAS_TEL_HREF,
  ORLANDO_BOOKING_HREF,
  ORLANDO_BOOK_LABEL,
  ORLANDO_CALL_LABEL,
  ORLANDO_EMAIL,
  ORLANDO_LOCATION_NAME,
  ORLANDO_TEL_HREF,
} from '../lib/locationActions';

function read(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), 'utf8');
}

describe('city call and booking pairing', () => {
  test('labels, phones, emails, and booking routes stay paired', () => {
    expect(LAS_VEGAS_CALL_LABEL).toBe('Call Las Vegas: 702-508-6248');
    expect(ORLANDO_CALL_LABEL).toBe('Call Orlando: (407) 513-2935');
    expect(LAS_VEGAS_BOOK_LABEL).toBe('Book a Las Vegas appointment');
    expect(ORLANDO_BOOK_LABEL).toBe('Book an Orlando appointment');
    expect(LAS_VEGAS_TEL_HREF).toBe('tel:+17025086248');
    expect(ORLANDO_TEL_HREF).toBe('tel:+14075132935');
    expect(LAS_VEGAS_EMAIL).toBe('contact@fluffypetwash.com');
    expect(ORLANDO_EMAIL).toBe('orlando@fluffypetwash.com');
    expect(LAS_VEGAS_BOOKING_HREF).toBe('/booking?location=Las%20Vegas%2C%20Nevada');
    expect(ORLANDO_BOOKING_HREF).toBe('/booking?location=Orlando%2C%20Florida');
    expect(LAS_VEGAS_CALL_LABEL).not.toContain('218-517-8083');
    expect(LAS_VEGAS_CALL_LABEL).not.toContain('407');
    expect(ORLANDO_CALL_LABEL).not.toContain('702');
  });

  test('booking routes are the territories the pre-book form already opens', () => {
    const names = territories.map((territory) => territory.name);
    expect(names).toContain(LAS_VEGAS_LOCATION_NAME);
    expect(names).toContain(ORLANDO_LOCATION_NAME);
    expect(territories.find((territory) => territory.name === LAS_VEGAS_LOCATION_NAME)?.bookingUrl).toBe(
      'https://booking.moego.pet/ol/FLUFFYPETWASH/book?utm_medium=embed',
    );
    expect(territories.find((territory) => territory.name === ORLANDO_LOCATION_NAME)?.bookingUrl).toBe(
      'https://booking.moego.pet/ol/FluffyPetWashOrlando/book?utm_medium=embed',
    );
  });

  test('only the Las Vegas call href fires the Las Vegas call conversion', () => {
    expect(conversionForHref(LAS_VEGAS_TEL_HREF)?.sendTo).toBe(LAS_VEGAS_CALL_SEND_TO);
    expect(conversionForHref(ORLANDO_TEL_HREF)).toBeNull();
    expect(conversionForHref(LAS_VEGAS_BOOKING_HREF)).toBeNull();
    expect(conversionForHref(ORLANDO_BOOKING_HREF)).toBeNull();
    expect(LAS_VEGAS_CALL_SEND_TO).toBe('AW-10869086002/OKW7CMrh0ZIdELKu5L4o');
  });

  test('the choice component wires each city to its own call, book, and email', () => {
    const source = read('components/LocationChoices.tsx');
    expect(source).toContain('callHref: LAS_VEGAS_TEL_HREF');
    expect(source).toContain('callLabel: LAS_VEGAS_CALL_LABEL');
    expect(source).toContain('bookHref: LAS_VEGAS_BOOKING_HREF');
    expect(source).toContain('bookLabel: LAS_VEGAS_BOOK_LABEL');
    expect(source).toContain('email: LAS_VEGAS_EMAIL');
    expect(source).toContain('callHref: ORLANDO_TEL_HREF');
    expect(source).toContain('callLabel: ORLANDO_CALL_LABEL');
    expect(source).toContain('bookHref: ORLANDO_BOOKING_HREF');
    expect(source).toContain('bookLabel: ORLANDO_BOOK_LABEL');
    expect(source).toContain('email: ORLANDO_EMAIL');
    expect(source).toContain('Choose a city to call or book');
    expect(source.indexOf('Las Vegas')).toBeLessThan(source.indexOf('Orlando'));
    expect(source).not.toContain('218-517-8083');
    expect(source).not.toContain('209 Popolo');
    expect(source).not.toContain('89138');
  });

  test('orlando, contact, and the orlando footer show both cities', () => {
    const orlando = read('pages/orlando.tsx');
    const contact = read('pages/contact.tsx');
    const footer = read('components/Layout/Footer.tsx');

    for (const source of [orlando, contact]) {
      expect(source).toContain('<LocationChoices');
      expect(source).toContain('LAS_VEGAS_TEL_HREF');
      expect(source).toContain('ORLANDO_TEL_HREF');
      expect(source).toContain('LAS_VEGAS_BOOKING_HREF');
      expect(source).toContain('ORLANDO_BOOKING_HREF');
    }

    expect(footer).toContain('isOrlandoSurface ? (');
    expect(footer).toContain('<LocationChoices tone="dark" />');
    expect(footer).toContain('href={LAS_VEGAS_TEL_HREF}');
    expect(footer).toContain('pathname === "/"');
    expect(footer).toContain('Contact Us for Phone Numbers');
    expect(footer).not.toContain('tel:+14075132935');
    expect(footer).not.toContain('218-517-8083');
  });

  test('the orlando grand-opening post lists both cities and no other post does', () => {
    const orlandoPost = posted.find((post) => post.slug === 'orlando-grand-opening');
    expect(orlandoPost).toBeDefined();
    const content = orlandoPost?.content ?? '';
    expect(content).toContain(`href="${LAS_VEGAS_BOOKING_HREF}"`);
    expect(content).toContain(`href="${ORLANDO_BOOKING_HREF}"`);
    expect(content).toContain(`href="${LAS_VEGAS_TEL_HREF}"`);
    expect(content).toContain(`href="${ORLANDO_TEL_HREF}"`);
    expect(content).toContain(LAS_VEGAS_CALL_LABEL);
    expect(content).toContain(ORLANDO_CALL_LABEL);
    expect(content).toContain(LAS_VEGAS_BOOK_LABEL);
    expect(content).toContain(ORLANDO_BOOK_LABEL);
    expect(content).toContain(`mailto:${LAS_VEGAS_EMAIL}`);
    expect(content).toContain(`mailto:${ORLANDO_EMAIL}`);

    for (const post of posted) {
      if (post.slug === 'orlando-grand-opening') continue;
      expect(post.content).not.toContain(ORLANDO_TEL_HREF);
      expect(post.content).not.toContain(ORLANDO_BOOK_LABEL);
      expect(post.content).not.toContain(ORLANDO_EMAIL);
    }
  });

  test('ordinary Las Vegas pages do not gain Orlando call or booking actions', () => {
    const lasVegasPages = [
      'components/Home.tsx',
      'pages/index.tsx',
      'pages/services.tsx',
      'pages/prices.tsx',
      'pages/faq.tsx',
      'pages/about.tsx',
      'pages/cat-grooming-las-vegas.tsx',
      'pages/doodle-grooming-las-vegas.tsx',
    ];

    for (const relativePath of lasVegasPages) {
      const source = read(relativePath);
      expect(source).not.toContain('LocationChoices');
      expect(source).not.toContain(ORLANDO_BOOK_LABEL);
      expect(source).not.toContain(ORLANDO_CALL_LABEL);
      expect(source).not.toContain('tel:+14075132935');
    }
  });
});
