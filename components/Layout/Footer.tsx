const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Fluffy Pet Wash. All rights reserved.</p>
        <p className="mt-2">
          Follow us on{' '}
          <a href="https://facebook.com" target="_blank" className="underline">
            Facebook
          </a>{' '}
          |{' '}
          <a href="https://instagram.com" target="_blank" className="underline">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;