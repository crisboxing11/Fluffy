import React, { useState } from 'react';

const BookingEmbed: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-[800px]">
      {loading && <p className="text-center">Loading booking system...</p>}
      <iframe
        src="https://booking.moego.pet/ol/FLUFFYPETWASH/book?utm_medium=embed"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Online Booking"
        scrolling="no"
        onLoad={() => setLoading(false)}
        className="absolute inset-0"
      ></iframe>
    </div>
  );
};

export default BookingEmbed;