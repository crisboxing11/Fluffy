import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        Have questions or want to inquire about franchising? Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;