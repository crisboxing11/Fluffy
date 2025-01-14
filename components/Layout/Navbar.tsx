import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-teal text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo/Brand Name */}
        <Link
          href="/"
          className="text-2xl font-bold hover:text-lightGray transition-colors"
        >
          Fluffy Pet Wash
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-sm sm:text-base">
          <Link
            href="/"
            className="hover:text-pastelTeal transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-pastelTeal transition-colors"
          >
            About
          </Link>
          <Link
            href="/franchise"
            className="hover:text-pastelTeal transition-colors"
          >
            Franchise
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;