export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  /**
   * Custom meta title used for the HTML <title> tag. If omitted the
   * page title will be used instead.
   */
  metaTitle?: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /**
   * Intrinsic pixel size of `image`. When both are set, the post hero uses
   * next/image with these dimensions instead of a filled crop.
   */
  imageWidth?: number;
  imageHeight?: number;
  /** Optional caption under the hero. Not repeated inside `content`. */
  imageCaption?: string;
  /**
   * When set, the template renders these questions and emits FAQPage JSON-LD
   * from this same array.
   */
  faq?: BlogFaq[];
  date: string;
  content: string;
};

export const posted: BlogPost[] = [
  {
    slug: 'goldendoodle-haircut-guide',
    title: 'Goldendoodle Haircuts in Las Vegas: What to Ask For and What It Costs',
    metaTitle: 'Goldendoodle Haircuts in Las Vegas | Fluffy Pet Wash',
    excerpt:
      'Planning a goldendoodle haircut in Las Vegas? Learn what to ask your groomer, how pricing works, and how mobile grooming keeps doodles comfortable.',
    // image: generated (GenerateImage, Oct 20 2026); exported, see workflow.md Images
    image: '/blog/goldendoodle-haircut-guide/goldendoodle-haircut-hero.webp',
    imageAlt:
      'A goldendoodle with a fresh teddy bear cut standing on a grooming table inside a mobile grooming van, desert hills outside',
    imageWidth: 1600,
    imageHeight: 900,
    imageCaption:
      'Illustrative image: a freshly trimmed goldendoodle in a mobile grooming van, warm desert light.',
    date: '2026-10-27',
    content: `
      <p>That soft, curly goldendoodle coat is a big part of why people fall in love with the breed. It also takes real upkeep. If your doodle is due for a haircut, a little planning helps: know what to ask for, what the visit costs, and how to keep the coat looking good between appointments. Here's what we've learned from grooming doodles across Las Vegas.</p>

      <h2>Why goldendoodle coats need regular haircuts</h2>
      <p>Doodle coats come in many textures, from loose waves to tight curls, and many of them keep growing instead of shedding out. That's great for keeping hair off the couch. It also means loose hair can get caught in the coat and start to tangle, especially behind the ears, under the collar, in the armpits and on the legs.</p>
      <p>A regular haircut keeps the coat at a length you can actually brush at home. It keeps the face and eyes clear and the paws tidy, and it gives your groomer a chance to catch small tangles before they become mats. If you notice anything on your dog's skin that worries you, ask your vet.</p>

      <h2>Popular goldendoodle haircut styles</h2>
      <p>There's no single "correct" doodle cut. These are the requests we hear most often:</p>
      <ul>
        <li><strong>Teddy bear style:</strong> a rounded face and an even length on the body. Soft and cuddly looking.</li>
        <li><strong>Shorter all-over trim:</strong> an easier-care length for busy families or very active dogs.</li>
        <li><strong>Longer, fluffier look:</strong> shows off the curls, but needs more brushing at home.</li>
        <li><strong>Tidy-up between full cuts:</strong> face, feet and sanitary areas trimmed to stretch the time between big haircuts.</li>
      </ul>
      <p>Photos help a lot. Bring a picture or two of a look you like. Your groomer will look at your dog's coat in person and talk through what will work. <strong>The final cut style is always decided together with your groomer at the appointment</strong>, because coat texture, length and condition all affect what's possible that day.</p>

      <!-- image: generated (GenerateImage, Oct 20 2026); exported, see workflow.md Images -->
      <figure>
        <img src="/blog/goldendoodle-haircut-guide/goldendoodle-brushing-mobile-van.webp" alt="A gloved hand brushing a goldendoodle's curly coat with a slicker brush on a grooming table" width="1200" height="900" />
        <figcaption>Illustrative image: brushing out a curly doodle coat before a trim.</figcaption>
      </figure>

      <h2>What to tell your groomer</h2>
      <p>A few details make the visit go smoothly:</p>
      <ul>
        <li>How short you want it overall, and whether the face should be rounder or shorter</li>
        <li>Whether you want the ears and tail left long</li>
        <li>Any spots your dog is sensitive about, like paws or ears</li>
        <li>How much brushing you realistically do at home (no judgment, it helps us pick a practical length)</li>
        <li>If you've noticed tangles or matting, so we can plan the right approach</li>
      </ul>

      <h2>What a goldendoodle haircut costs at Fluffy Pet Wash</h2>
      <p>We keep doodle pricing simple. Here's a real example: <strong>a large doodle with a haircut is $140 + a $50 specialized breed fee = $190.</strong></p>
      <p>A few things to know about how that works:</p>
      <ul>
        <li>The specialized breed fee is <strong>up to $50</strong>. It applies when your doodle gets a haircut or has matting.</li>
        <li><strong>The breed fee already includes the haircut.</strong> The separate haircut add-on doesn't stack on top of it, so you won't pay both.</li>
        <li>Base prices depend on size. You can see all of our size tiers on the <a href="/prices">prices page</a>.</li>
        <li><strong>There are no travel fees.</strong> We come to you anywhere in Las Vegas.</li>
      </ul>
      <p>After your first appointment you can join <strong>Fluffy Preferred</strong> for 10% off services. We accept card, cash and Zelle (no checks). Card payments carry a 3.4% + 30¢ service charge.</p>
      <p>For more on how we groom doodles, visit our <a href="/doodle-grooming-las-vegas">doodle grooming page</a>.</p>

      <h2>Why mobile grooming works well for doodles</h2>
      <p>Doodles are often social, energetic dogs. For some of them, a busy salon full of other dogs, dryers and kennels is a lot. With mobile grooming, your dog gets one-on-one attention in our van, right outside your home. There's no car ride, no waiting in a kennel, and you're close by the whole time.</p>
      <p>We're open 7 AM to 10 PM every day (closed Thanksgiving and Christmas), so it's easier to find a time that fits around work, school and walks.</p>

      <h2>Keeping the coat nice between appointments</h2>
      <p>A good haircut lasts longer with a little help at home:</p>
      <ul>
        <li><strong>Brush a few times a week</strong>, working all the way down to the skin, not just over the top of the coat.</li>
        <li><strong>Check the friction spots</strong> where tangles start: behind the ears, the collar line, armpits and the backs of the legs.</li>
        <li><strong>Dry the coat fully</strong> after baths or swims. Damp curls tangle faster.</li>
        <li><strong>Book your next visit before the coat gets long.</strong> Staying on a regular schedule is easier on your dog than working through heavy tangles.</li>
      </ul>
      <p>Ask your groomer how often they'd suggest for your dog's coat and lifestyle. Many owners find a regular rebooking rhythm keeps things easy.</p>

      <h2>Ready to book your doodle's haircut?</h2>
      <p>Whether your goldendoodle needs a full teddy bear cut or a neat tidy-up, we'd love to help. <a href="/prebook">Book online at /prebook</a> or call us at <strong>702-508-6248</strong>. Questions? Email contact@fluffypetwash.com.</p>
    `,
    faq: [
      {
        question: 'How much is a goldendoodle haircut at Fluffy Pet Wash?',
        answer:
          "For example, a large doodle with a haircut is $140 plus a $50 specialized breed fee, for $190 total. The breed fee (up to $50) already includes the haircut, so the haircut add-on isn't charged on top. See /prices for all size tiers.",
      },
      {
        question: 'Can I choose the exact haircut style ahead of time?',
        answer:
          "You're welcome to share photos and preferences when you book. The final style is decided in person with your groomer, based on your doodle's coat that day.",
      },
      {
        question: 'Do you charge a travel fee?',
        answer: 'No. There are no travel fees anywhere in our Las Vegas service area.',
      },
    ],
  },
  {
    slug: 'stress-free-grooming',
    title: '5 Tips for Stress-Free Grooming',
    metaTitle: 'Stress-Free Grooming: 5 Expert Tips | Fluffy Pet Wash',
    excerpt: 'Transform your dog’s grooming routine into a calm, happy experience with these expert tips from Fluffy Pet Wash.',
    image: '/Blow Dry Dog.jpeg',
    imageAlt: 'Dog being blow dried',
    date: '2025-06-30',
    content: `
      <p>At Fluffy Pet Wash, we know that grooming time doesn’t have to be a stressful experience. In fact, it can be one of the most powerful ways to bond with your dog. Whether you’re grooming at home or scheduling a mobile grooming session with our expert team, here are 5 proven ways to turn grooming into a peaceful ritual your pup will love.</p>
  
      <h2>1. Create a Relaxing Atmosphere</h2>
      <p>Dogs are incredibly sensitive to their environment. Dim the lights, play calming music, and speak in a soft, reassuring voice. Our mobile grooming vans are specially designed to feel like a peaceful spa retreat—temperature-controlled, gently lit, and stocked with soothing scents that help nervous pets unwind.</p>
  
      <h2>2. Use Positive Reinforcement</h2>
      <p>Just like training, grooming becomes easier when it’s paired with rewards. Offer your dog high-value treats and praise after every step—whether it’s brushing, ear cleaning, or nail trimming. This builds positive associations over time, transforming your dog’s attitude toward grooming from fearful to enthusiastic.</p>
  
      <h2>3. Go Slow & Introduce Tools Gradually</h2>
      <p>Don’t expect your dog to be okay with loud clippers or slicker brushes right away. Let them explore each tool at their own pace—sniff it, touch it, see that it won’t hurt them. At Fluffy, our groomers are trained in dog psychology and use gentle introductions with every new client, especially those who are reactive or anxious.</p>
  
      <h2>4. Keep Sessions Short (At First)</h2>
      <p>Especially with puppies or rescue dogs, keep early sessions under 10 minutes. Over time, you can increase duration and complexity. The goal isn’t perfection, it’s progress. Frequent short sessions are more effective than long, stressful ones.</p>
  
      <h2>5. Maintain a Consistent Schedule</h2>
      <p>Dogs thrive on routine. A regular grooming schedule every 2 to 4 weeks helps reduce stress by making grooming feel like a normal part of life. Our Fluffy clients often book recurring appointments so their dogs know exactly what to expect.</p>
  
      <h2>Bonus Tip: Leave It to the Pros</h2>
      <p>If your dog gets anxious, hiring a professional groomer is the best decision you can make. Fluffy Pet Wash offers <strong>luxury mobile grooming</strong> services designed with your pet’s emotional well-being in mind. Our team handles everything with compassion and expertise so your pup feels safe, clean, and fabulous.</p>
  
      <p><strong>Book your stress-free appointment today at the <a href="https://www.fluffypetwash.com">Fluffy Pet Wash website</a> and experience the Fluffy difference!</strong></p>
    `
  },
  {
    slug: 'why-mobile-grooming-works',
    title: 'Why Mobile Grooming Works',
    metaTitle: 'Why Mobile Grooming Works: Convenience & Care | Fluffy Pet Wash',
    excerpt: 'Skip the stress and book a mobile dog grooming appointment with Fluffy Pet Wash for a happier, healthier pet.',
    image: '/White Happy Dog.jpeg',
    imageAlt: 'Happy white dog with tongue out',
    date: '2025-07-01',
    content: `
      <p>Let’s face it: traditional dog grooming can be a nightmare. You load your dog into the car, deal with traffic, wait in line, and leave your pup in a noisy salon filled with barking dogs and strangers. For many pets (and their humans), this is a recipe for anxiety.</p>
  
      <p><strong>Enter mobile grooming.</strong> At Fluffy Pet Wash, we bring the grooming salon straight to your driveway. Our state-of-the-art grooming vans are fully equipped, climate-controlled, and designed to provide a safe, serene experience for your furry friend—right outside your door.</p>
  
      <h2>1. Personalized, One-on-One Care</h2>
      <p>Unlike crowded salons, Fluffy Pet Wash offers uninterrupted attention. Your dog gets groomed by the same expert from start to finish—no passing between hands, no distractions, and no loud environments.</p>
  
      <h2>2. No More Car Rides</h2>
      <p>Some dogs love the car. Others? Not so much. Mobile grooming eliminates the need to transport your pet. We come to your home or workplace so your dog stays in a familiar setting and skips the stress altogether.</p>
  
      <h2>3. Safer, Cleaner, and Quicker</h2>
      <p>Our grooming units are sanitized after every session, and our groomers follow strict health protocols. No cages. No exposure to unfamiliar animals. Plus, most appointments are completed in under 90 minutes—far faster than the 3–4 hour average at many salons.</p>
  
      <h2>4. Ideal for Anxious or Senior Dogs</h2>
      <p>Does your pup get nervous around other dogs? Does your senior dog struggle with mobility? Mobile grooming is especially ideal for pets who need a little extra TLC. Our groomers are trained to handle everything with patience and love.</p>
  
      <h2>5. Total Convenience for Busy Pet Parents</h2>
      <p>Working from home? Running errands? Just don’t want to leave the house? Book online and we’ll handle the rest. No time wasted, no traffic, and no stress. Just a fresh, fluffy pup delivered back to you with a wagging tail and sparkling coat.</p>
  
      <p><strong>Join thousands of happy pet parents who trust Fluffy Pet Wash to make grooming easier, faster, and fluffier.</strong> Book now on the <a href="https://www.fluffypetwash.com">Fluffy Pet Wash website</a> and see why mobile grooming isn’t just a trend—it’s the future.</p>
    `
  },
  {
    slug: 'choosing-the-right-shampoo',
    title: 'Choosing the Right Shampoo for Your Dog',
    metaTitle: 'Choosing the Best Dog Shampoo | Fluffy Pet Wash Advice',
    excerpt: 'Not all pet shampoos are created equal. Discover how to choose the best formula for your dog’s unique coat and skin.',
    image: '/Black Happy Dog.jpeg',
    imageAlt: 'Black dog smiling after bath',
    date: '2025-07-02',
    content: `
      <p>Ever wonder why your dog’s coat isn’t as shiny or soft as it could be? The culprit might be your shampoo. At Fluffy Pet Wash, we’ve seen it all—from flaky skin to irritated paws—all caused by the wrong products. Choosing the right shampoo is about more than smell. It’s about skin health, coat quality, and overall comfort.</p>
  
      <h2>1. Avoid Human Shampoo at All Costs</h2>
      <p>Human shampoo is not pH-balanced for dogs. It strips their natural oils, leaving skin dry and irritated. Always use products specifically designed for canine skin.</p>
  
      <h2>2. Look for Hypoallergenic and Organic Options</h2>
      <p>If your dog licks their paws, scratches often, or has dry skin, hypoallergenic shampoos are your best bet. Ingredients like oatmeal, chamomile, coconut oil, and aloe vera soothe and protect sensitive skin without harsh chemicals.</p>
  
      <h2>3. Choose Shampoo Based on Coat Type</h2>
      <ul>
        <li><strong>Short-coated dogs</strong> may benefit from deep-cleaning formulas that remove oils and debris.</li>
        <li><strong>Long-haired breeds</strong> often need moisturizing shampoos with detangling conditioners to prevent matting.</li>
        <li><strong>Double-coated dogs</strong> require products that help with deshedding and promote undercoat health.</li>
      </ul>
  
      <h2>4. Watch Out for Artificial Fragrances & Dyes</h2>
      <p>Many commercial shampoos smell nice but are loaded with synthetic chemicals that can irritate your dog’s skin. Always choose shampoos with natural, essential-oil-based scents.</p>
  
      <h2>5. Ask Your Groomer</h2>
      <p>At Fluffy Pet Wash, our groomers select shampoos and conditioners tailored to your dog’s specific needs. Whether it’s a medicated formula, a flea-fighting rinse, or a blueberry facial, we’ve got it covered.</p>
  
      <p><strong>Want your dog to look and feel amazing?</strong> Book a Fluffy appointment today and let us choose the best products for your pup’s coat and skin. A healthy dog is a happy dog—and nothing feels better than a soft, shiny fluffball curled up next to you.</p>
    `
  },
  {
    slug: 'why-we-dont-shave',
    title: 'Why We Don’t Shave Dogs',
    metaTitle: 'Why We Don\u2019t Shave Dogs | Fluffy Pet Wash Advice',
    excerpt: 'Thinking about shaving your dog to keep them cool? Here’s why that can actually harm their coat, their skin, and even their health.',
    image: '/No Shave.jpeg',
    date: '2025-07-25',
    content: `
      <p>It’s a hot day. Your dog is panting. And someone says, you should shave them to keep them cool. It seems like a logical solution, right?</p>
  
      <p>Wrong. At Fluffy Pet Wash, we do not offer full body shave downs for double coated or non hair breeds, and there’s a very good reason why. Shaving the wrong dog doesn’t just change their look. It can lead to long term coat damage, skin irritation, overheating, and even behavioral stress.</p>
  
      <h2>Understanding Your Dog’s Coat Type</h2>
      <p>Not all dogs have the same coat. Some breeds, like poodles, have hair that grows continuously and can safely be trimmed. Others, like golden retrievers, huskies, or German shepherds, have what’s called a double coat. That means a dense insulating undercoat beneath a protective outer coat.</p>
  
      <p>These two layers work together to regulate your dog’s temperature in both cold and hot weather. Shaving that system off removes their natural protection and can create long term harm.</p>
  
      <h2>Why Shaving Can Actually Make Your Dog Hotter</h2>
      <ul>
        <li><strong>Damages the coat permanently:</strong> After shaving, some dogs experience patchy, uneven regrowth or never recover their natural coat, especially older dogs.</li>
        <li><strong>Leads to overheating:</strong> Contrary to popular belief, the coat actually insulates against heat. Removing it makes dogs more vulnerable to sun and extreme temperatures.</li>
        <li><strong>Causes sunburn and skin damage:</strong> Dog skin is extremely sensitive. Shaving removes their only protective barrier, leaving them exposed to UV rays, allergens, and abrasions.</li>
        <li><strong>Triggers behavioral anxiety:</strong> Many dogs feel exposed and uncomfortable after being shaved. They may hide, lick excessively, or show signs of stress.</li>
        <li><strong>Disrupts shedding cycles:</strong> A healthy double coat sheds seasonally. Shaving confuses this natural rhythm and can cause unpredictable, excessive year round shedding.</li>
      </ul>
  
      <h2>What to Do Instead</h2>
      <p>At Fluffy Pet Wash, we believe in doing what’s right for the dog, not what’s quick or trendy. Here are our safe and effective alternatives to shaving:</p>
      <ul>
        <li><strong>Deshedding treatments:</strong> We remove loose undercoat using professional tools without damaging the outer guard hairs.</li>
        <li><strong>Sanitary and belly trims:</strong> We keep your dog clean and comfortable without compromising their insulation.</li>
        <li><strong>Paw pad and ear trims:</strong> These areas trap heat and dirt. Trimming them can improve comfort and airflow.</li>
        <li><strong>Conditioning and moisturizing:</strong> A healthy coat insulates better. We nourish the skin and fur to prevent dryness and matting.</li>
      </ul>
  
      <h2>Let the Coat Do Its Job</h2>
      <p>That fluffy coat isn’t just for looks. It’s designed by nature to protect, regulate, and shield your dog. With proper grooming and maintenance, it works like a high tech natural cooling system. Removing it is like taking the insulation off your roof during a heat wave.</p>
  
      <p>We know you want your dog to be comfortable. That’s exactly why we don’t shave. Instead, we provide expert care tailored to your dog’s breed, coat type, and health. From deshedding to spa grade conditioning, we do it right every time.</p>
  
      <p><strong>Book your grooming appointment with Fluffy Pet Wash today and help your dog stay cool, comfortable, and protected the safe way.</strong> Visit the <a href="https://www.fluffypetwash.com">Fluffy Pet Wash website</a> to schedule now.</p>
    `,
    imageAlt: ""
  },

  {
    slug: 'orlando-grand-opening',
    title: 'Fluffy Pet Wash Expands to Orlando!',
    metaTitle: 'Fluffy Pet Wash Expands to Orlando! | Grand Opening News',
    excerpt: 'The most loved mobile pet grooming service in Las Vegas is now grooming pups across Orlando.',
    image: '/Orlando Van .png',
    date: '2025-07-13',
    content: `
      <p>🎉 <strong>Orlando, welcome to the Fluffy family!</strong> After years of delighting pets and their parents in Las Vegas, <strong>Fluffy Pet Wash</strong> has officially launched in sunny Orlando—and we're ready to make every pup in town look (and smell) amazing.</p>
  
      <h2>Why Orlando?</h2>
      <p>Orlando isn’t just home to magic kingdoms—it's home to thousands of beloved dogs who deserve premium, stress-free grooming right at their doorstep. We knew this city needed a mobile grooming solution that’s clean, kind, convenient, and powered by real pet lovers. So we brought it.</p>
  
      <h2>What Makes Fluffy Different?</h2>
      <ul>
        <li><strong>We Come to You:</strong> No more traffic, no more waiting rooms. Just book online, and our beautiful Fluffy van rolls up to your driveway.</li>
        <li><strong>One-on-One Service:</strong> Your dog is the only client. That means no cages, no barking chaos, just calm, professional grooming from start to finish.</li>
        <li><strong>Premium Hypoallergenic Products:</strong> We use the best shampoos, conditioners, and de-shedding treatments in the industry—safe for all breeds and coat types.</li>
        <li><strong>Veteran-Owned, Passion-Driven:</strong> We’re not just groomers. We’re animal advocates, proud veterans, and entrepreneurs driven by purpose.</li>
      </ul>
  
      <h2>🚐 Meet the Fluffy Van</h2>
      <p>Our mobile grooming unit is a fully equipped spa on wheels. It’s got warm water, AC, soft lighting, calming music, and all the tools needed for a show-stopping glow-up. Your dog will come out looking red-carpet ready—and feeling like royalty.</p>
  
      <h2>🎁 Grand Opening Special</h2>
      <p>To celebrate our Orlando launch, we’re offering an exclusive <strong>10% off your first appointment</strong> plus <strong>FREE premium add-ons</strong> like blueberry facials, paw balm, and teeth brushing—because your pup deserves the full Fluffy treatment.</p>
  
      <p><strong>Booking is easy:</strong> Visit the <a href="https://www.fluffypetwash.com">Fluffy Pet Wash website</a> and select your location. We’ll take care of the rest. Orlando, let’s get Fluffy!</p>
    `,
    imageAlt: ""
  },
];