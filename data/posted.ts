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
      <p>Making grooming stress-free starts with a calm environment and gentle handling...</p>
      <ul>
        <li>Use positive reinforcement.</li>
        <li>Introduce tools slowly.</li>
        <li>Keep the first sessions short.</li>
      </ul>
    `
  },
  {
    slug: 'why-mobile-grooming-works',
    title: 'Why Mobile Grooming Works',
    excerpt: 'Learn about the benefits of having a professional groomer come right to your door.',
    image: '/White Happy Dog.jpeg',
    date: '2024-07-01',
    content: `
      <p>Mobile grooming offers convenience and a calm environment for your dog...</p>
    `
  },
  {
    slug: 'choosing-the-right-shampoo',
    title: 'Choosing the Right Shampoo',
    excerpt: 'We break down hypoallergenic options to keep your pet’s coat shiny and healthy.',
    image: '/Black Happy Dog.jpeg',
    date: '2024-07-01',
    content: `
      <p>Not all shampoos are created equal. Here's what to look for...</p>
    `
  }
];