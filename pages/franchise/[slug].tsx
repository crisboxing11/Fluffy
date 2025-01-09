import BookingForm from '../../components/BookingForm';
import { useRouter } from 'next/router';

const FranchisePage = () => {
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Welcome to the {slug} Franchise!</h1>
      <p className="mt-4">Book an appointment at this location:</p>
      <div className="mt-8">
        <BookingForm />
      </div>
    </div>
  );
};

export default FranchisePage;