export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
};

export const posted: BlogPost[] = [
  {
    slug: 'stress-free-grooming',
    title: '5 Tips for Stress-Free Grooming',
    excerpt: 'Discover simple ways to make grooming a relaxing experience for your furry friend.',
    image: '/Blow Dry Dog.jpeg',
    date: '2024-07-01',
    content: `
      <p>Making grooming stress-free starts with a calm environment and gentle handling. Set aside a quiet space and keep your tone reassuring so your dog associates grooming time with relaxation.</p>
      <p>Use treats to reward good behavior and gradually introduce grooming tools. Start with short sessions focusing on one task, such as brushing, and build up to full grooms.</p>
      <ul>
        <li>Use positive reinforcement.</li>
        <li>Introduce tools slowly.</li>
        <li>Keep the first sessions short.</li>
        <li>Schedule regular grooming to maintain familiarity.</li>
      </ul>
      <p>By sticking to a routine and staying patient, you'll create a pleasant grooming ritual that keeps your pet happy and healthy.</p>
    `
  },
  {
    slug: 'why-mobile-grooming-works',
    title: 'Why Mobile Grooming Works',
    excerpt: 'Learn about the benefits of having a professional groomer come right to your door.',
    image: '/White Happy Dog.jpeg',
    date: '2024-07-01',
    content: `
      <p>Mobile grooming brings the salon directly to your driveway, eliminating the stress of car rides and unfamiliar environments. Your pet gets one-on-one attention from a professional in a sanitized, climate-controlled van.</p>
      <p>This personalized approach is ideal for anxious dogs or busy owners. You save time while your pet stays calm in a space designed just for them.</p>
    `
  },
  {
    slug: 'choosing-the-right-shampoo',
    title: 'Choosing the Right Shampoo',
    excerpt: 'We break down hypoallergenic options to keep your pet’s coat shiny and healthy.',
    image: '/Black Happy Dog.jpeg',
    date: '2024-07-01',
    content: `
      <p>Not all shampoos are created equal. Look for formulas that match your pet’s skin sensitivity and coat type. Hypoallergenic options are great for dogs prone to irritation.</p>
      <p>Ingredients like oatmeal, aloe, and coconut oil provide nourishment while keeping the coat shiny. Avoid harsh chemicals and strong fragrances that can dry out skin.</p>
      <p>When in doubt, ask your groomer for recommendations tailored to your dog’s needs.</p>
    `
  }
];