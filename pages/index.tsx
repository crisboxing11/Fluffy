import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Fluffy Pet Wash!</h1>
        <p className="mt-4 text-lg">Professional Mobile Pet Grooming, Now Franchising Nationwide!</p>
        <Link href="/franchise">
          <button className="mt-6 bg-white text-blue-500 font-bold py-2 px-4 rounded">
            Learn About Franchising
          </button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li className="p-4 bg-white shadow-md text-center">
              <h3 className="font-bold">Professional Wash</h3>
              <p className="text-sm mt-2">Hypoallergenic wash, blow dry, and brush out.</p>
            </li>
            <li className="p-4 bg-white shadow-md text-center">
              <h3 className="font-bold">Nail Trimming</h3>
              <p className="text-sm mt-2">Safe and painless nail trimming & filing.</p>
            </li>
            <li className="p-4 bg-white shadow-md text-center">
              <h3 className="font-bold">Blueberry Facial</h3>
              <p className="text-sm mt-2">Luxurious blueberry facial for your pet!</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;