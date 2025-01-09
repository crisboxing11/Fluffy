import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Fluffy Pet Wash</h1>
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/franchise" className="hover:underline">
            Franchise
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;