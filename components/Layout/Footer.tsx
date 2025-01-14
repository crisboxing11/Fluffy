import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-navy text-lightGray py-8">
      <div className="container mx-auto text-center px-4">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/fluffy.PNG" // Correct path
            alt="Fluffy Pet Wash Logo"
            width={120}
            height={48}
            priority
          />
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fluffy Pet Wash. All rights reserved.
        </p>

        {/* Social Media Links */}
        <p className="mt-4">
          Follow us on{' '}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua hover:text-pastelTeal transition-colors underline"
          >
            Facebook
          </a>{' '}
          |{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua hover:text-pastelTeal transition-colors underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;