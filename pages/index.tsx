import BookingEmbed from '../components/BookingEmbed';


const HomePage = () => {
  return (
    <div>
     

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aqua to-pastelTeal text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Fluffy Pet Wash!</h1>
          <p className="mt-4 text-lg">Professional Mobile Pet Grooming, Now Franchising Nationwide!</p>
          <div className="mt-8">
            <a
              href="/book"
              className="bg-coral text-white px-6 py-3 rounded-lg hover:bg-lightGray transition-colors"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Book an Appointment</h2>
          <BookingEmbed />
        </div>
      </section>
    </div>
  );
};

export default HomePage;