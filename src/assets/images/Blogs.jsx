const Blogs = [
  {
    id: 3,
    title:
      "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas from Acurable",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
    category: "Health",
    author: "Darrell Etherington",
    authorPic: "author1.jpg",
    published_date: "October 4, 2023",
    reading_time: "8 minutes",
    content:
      "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable...",
    tags: ["Biotech", "Health"],
  },
  {
    id: 4,
    title:
      "Rainforest raises $8.5M to help software companies embed financial services, payments",
    image:
      "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
    category: "Fintech",
    author: "Mary Ann Azevedo",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, “Every company will be a fintech company.” Specifically, Strange projected that — in the not-too-d...",
    tags: ["Fintech", "Writing"],
  },
  {
    id: 5,
    title:
      "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Christine Hall",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Pow.bio intends to bring down the costs associated with biomanufacturing by reimagining of fermentation facility operations.",
    tags: ["Startups", "Writing"],
  },
  {
    id: 6,
    title:
      "Recapitalization, $60M Series D support growth of e-commerce financier Clearco",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1",
    category: "Fintech",
    author: "Christine Hall",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Today is news marks a turnaround for a company that is had its share of ups and downs over the past year.",
    tags: ["Blogging", "Writing"],
  },
  {
    id: 7,
    title: "Rabbit is building an AI model that understands how software works",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1325174870.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "What if you could interact with any piece of software using natural language? Imagine typing in a prompt and having AI translate the instructions into machine-comprehendable commands, executing tas...",
    tags: ["AI", "Writing"],
  },
  {
    id: 8,
    title:
      "Okta plans to weave AI across its entire identity platform using multiple models",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1350618660.jpg?w=430&h=230&crop=1",
    category: "Security",
    author: "Ron Miller",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "One thing is clear this year: generative AI is having a tremendous impact on the software industry, and a week doesn’t pass without software companies announcing their plans to incorporate the seem...",
    tags: ["Security", "Writing"],
  },
  {
    id: 9,
    title:
      "Yubico can now ship pre-registered security keys to its enterprise users",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/yubikey.jpg?w=430&h=230&crop=1",
    category: "Enterprise",
    author: "Frederic Lardinois",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Physical security keys remain one of the best ways to secure user accounts, but the fact that new users have to register them before they can use them often adds quite a bit of friction. Yubico, th...",
    tags: ["Blogging", "Writing"],
  },
  {
    id: 10,
    title:
      "Resy and Eater co-founder raises $24M for Blackbird, a restaurant loyalty platform",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/05/GettyImages-1238043769.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "8 minutes",
    content:
      "Blackbird Labs, a hospitality tech company whose platform helps restaurants stay in touch with guests and incentivize them to dine out more frequently, today announced that it raised $24 million in...",
    tags: ["Startups", "Writing"],
  },
  {
    id: 11,
    title:
      "TC Startup Battlefield master class with Flourish Ventures: Defining early-stage product-market fit",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/battlefield-biotics-ai.jpg?w=430&h=230&crop=1",
    category: "Growth",
    author: "Neesha A. Tambe",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: ["Growth", "Writing"],
  },
  {
    id: 12,
    title:
      "Yahoo spins out Vespa, its search tech, into an independent company",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/02/GettyImages-1242149379.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Yahoo, otherwise known as the company that pays my salary (full disclosure: Yahoo owns TC), today announced that it’s spinning off Vespa, the big data serving engine, into an independent vent...",
    tags: ["AI", "Writing"],
  },
  {
    id: 13,
    title:
      "Okta acquires a16z-backed password manager Uno to develop a personal tier",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/03/Uno.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Ivan Mehta",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content:
      "Okta, the U.S.-based identity mangement giant, announced today that it has acquired a password mangement app, Uno. The company said that Uno’s team will help speed up the public launch of the...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 14,
    title:
      "CoPilot, a training app that matches users with remote fitness coaches, raises $6.5M",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/copilot-screenshots.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Aisha Malik",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "CoPilot, a digital training app that matches users with one-on-one remote fitness coaches, has raised $6.5M in Series A-1 funding led by Jackson Square Ventures. The app, which has seen more than 1...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 15,
    title: "Opsera, a DevOps platform geared toward enterprises, raises $12M",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1439425791-1.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Kyle Wiggers",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Opsera, a DevOps platform geared toward enterprise clients, today announced that it raised $12 million in a funding round — a tranche smaller than Opsera’s previous — led by Taiwa...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 16,
    title:
      "EU lawmakers take aim at ‘arbitrary’ decisions by Big Tech in Media Freedom Act vote",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1459166551.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Natasha Lomas",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Mainstream social media platforms could face limits on their ability to take down independent journalism that violates their terms and conditions under a proposal agreed by European Union lawmakers...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 17,
    title:
      "Make these 5 changes to avoid becoming the next cybersecurity headline",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1455969376.jpg?w=430&h=230&crop=1",
    category: "Work",
    author: "Jim Broome",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Recent incidents, such as the breach at MGM Resorts, serve as stark reminders of the potential consequences of inadequate security measures.",
    tags: ["Apps", "Writing"],
  },
  {
    id: 18,
    title:
      "Make these 5 changes to avoid becoming the next cybersecurity headline",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1455969376.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Rebecca Bellan",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Uber is expanding its peer-to-peer package delivery service, Uber Connect. Now, customers who don’t want to schlep a package to the post office can request an Uber courier to do it for them w...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 19,
    title:
      "Open Banking led to a FinTech boom — As Brite raises $60M, account-to-account payment grows",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/04/hero-option-2-1.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Mike Butcher",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "The move towards Open Banking payments, especially in the EU, effectively kicked-off the FinTech boom. Open Baking standards meant that FinTech startups could create Wallets and effectively become ...",
    tags: ["Apps", "Writing"],
  },
  {
    id: 20,
    title: "Krafton India launches gaming incubator to expand local ecosystem",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/krafton-india-ceo-sean-hyunil-sohn.jpeg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Jagmeet Singh",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "The move towards Open Banking payments, especially in the EU, effectively kicked-off the FinTech boom. Open Baking standards meant that FinTech startups could create Wallets and effectively become ...",
    tags: ["Startups", "Writing"],
  },
  {
    id: 21,
    title: "Electric Hydrogen is the green hydrogen industry’s first unicorn",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/Small-cell-Testing-in-EH2-Natick-Accelerated-Lifetime-Testing-Facility-2.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Rebecca Bellan",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Investors have historically been skeptical of green hydrogen. High production costs, expensive infrastructure builds, competition with batteries and minimal government support have made the green h...",
    tags: ["Startups", "Writing"],
  },
  {
    id: 22,
    title:
      "In latest Cruise incident, video shows pedestrian struck by human-driven car, then run over by robotaxi",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/10/Cruise_700848.jpg?w=430&h=230&crop=1",
    category: "Startups",
    author: "Rebecca Bellan",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "The San Francisco Police Department is investigating an October 2 incident that left a woman stuck underneath a Cruise robotaxi after being hit by a human-driven vehicle. Video captured by Cruise a...",
    tags: ["Startups", "Writing"],
  },
  {
    id: 23,
    title:
      "Spotify to include a selection of 150K audiobooks with its Premium subscription",
    image:
      "https://techcrunch.com/wp-content/uploads/2022/10/Cruise_700848.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Spotify today unveiled what’s next for the future of its audiobooks service. At an event hosted in its New York offices on Tuesday afternoon, the company announced a new business model where",
    tags: ["Startups", "Writing"],
  },
  {
    id: 24,
    title: "How an AI deepfake ad of MrBeast ended up on TikTok",
    image:
      "https://techcrunch.com/wp-content/uploads/2021/12/mrbeast-squid-game-remake-1.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "AI deepfake today unveiled what’s next for the future of its audiobooks service. At an event hosted in its New York offices on Tuesday afternoon, the company announced a new business model where",
    tags: ["Startups", "Writing"],
  },
  {
    id: 25,
    title:
      "You can now add PayPal and Venmo credit or debit cards to your Apple Wallet",
    image:
      "https://techcrunch.com/wp-content/uploads/2021/12/mrbeast-squid-game-remake-1.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "PayPal announced today that users can now add their PayPal and Venmo credit or debit cards to their Apple Wallet. With this new integration, you can now make payments in-store, online or on apps using Apple Pay. The company notes that users will continue earning their cashback and rewards.",
    tags: ["Startups", "Writing"],
  },
  {
    id: 26,
    title:
      "The Xencelabs Pen Display 24 is a terrific alternative to Wacom’s big-screen drawing tablets",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/Xencelabs-Pen-Display-24-6.jpg?w=430&h=230&crop=1",
    category: "Gadgets",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Xencelabs announced today that users can now add their Xencelabs and Venmo credit or debit cards to their Apple Wallet. With this new integration, you can now make payments in-store, online or on apps using Apple Pay. The company notes that users will continue earning their cashback and rewards.",
    tags: ["Startups", "Writing"],
  },
  {
    id: 27,
    title:
      "US lawmakers ask TikTok about its ByteDance ties after recent exec transfers between the companies",
    image:
      "https://techcrunch.com/wp-content/uploads/2019/11/GettyImages-1177990253.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Xencelabs announced today that users can now add their Xencelabs and Venmo credit or debit cards to their Apple Wallet. With this new integration, you can now make payments in-store, online or on apps using Apple Pay. The company notes that users will continue earning their cashback and rewards.",
    tags: ["Startups", "Writing"],
  },
  {
    id: 28,
    title:
      "Sam Altman backs teens’ AI startup automating browser-native workflows",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/induced-ai.jpg?w=430&h=230&crop=1",
    category: "AI",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "Xencelabs announced today that users can now add their Xencelabs and Venmo credit or debit cards to their Apple Wallet. With this new integration, you can now make payments in-store, online or on apps using Apple Pay. The company notes that users will continue earning their cashback and rewards.",
    tags: ["Startups", "Writing"],
  },
  {
    id: 29,
    title:
      "Arc browser’s new AI-powered features combine OpenAI and Anthropic’s models",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/Screenshot-2023-10-03-at-10.16.25-PM.jpg?w=430&h=230&crop=1",
    category: "Apps",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
    tags: ["Startups", "Writing"],
  },
  {
    id: 30,
    title:
      "Promova’s new feature helps people with dyslexia learn a new language",
    image:
      "https://techcrunch.com/wp-content/uploads/2023/10/2.png?w=430&h=230&crop=1",
    category: "Apps",
    author: "Sarah Perez",
    authorPic: "author1.jpg",
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content:
      "The Arc browser is “finally” launching its AI-powered features under the “Arc Max” moniker. The Browser Company is using a combination of OpenAI’s GPT-3.5 and Anthropi...",
    tags: ["Startups", "Writing"],
  },
];

export default Blogs;
