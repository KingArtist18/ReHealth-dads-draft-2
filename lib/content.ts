/**
 * Single source of truth for ALL ReHealth Dads copy and links.
 * Everything below comes from the shared Google Drive folder
 * (current website screenshots, Draft 1 screens, and the 11-04 / 11-19 mockups).
 * Items marked TODO were placeholders in the mockups and need Paul's final wording or links.
 */

export const SITE = {
  name: "ReHealth Dads",
  tagline: "Become the man you want to be",
  philosophy: "One small win at a time.",
  owner: "Paul Sahota",
  ownerLegal: "Manpal (Paul) Sahota",
  email: "paul@rehealthdads.com",
  credential: "Certified Health Coach, Institute for Integrative Nutrition (IIN)",
  copyright: "© 2026 ReHealth Dads. All rights reserved.",
};

// TODO: replace with the real URLs
export const LINKS = {
  bookCall: "#", // Complimentary Win Streak Strategy Call booking link
  freeGuide: "#", // Break Out of the Start-Stop Cycle download link
  substack: "#", // Paul's Substack
  instagram: "#",
  facebook: "#",
  linkedin: "#",
  hollandBloorview: "#",
  grandviewKids: "#",
  selfExplorersClub: "#",
  iin: "#",
  uoft: "#",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "The ReHealth ReBuild", href: "/rebuild" },
  { label: "About Me", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Free Guide", href: "/free-guide" },
  { label: "Contact", href: "/contact" },
];

export const CTA = {
  book: "Book Your Complimentary Win Streak Strategy Call",
  bookShort: "Book a Complimentary Win Streak Strategy Call",
  guide: "Get the Free Guide",
};

export const HOME = {
  hero: {
    headline: "Tired of constantly starting over?",
    body:
      "Download Break Out of the Start-Stop Cycle, a free guide to help busy fathers build momentum, stay consistent, and stop feeling like they’re constantly starting over.",
    message: "Become the man you want to be.",
    philosophy: "One small win at a time.",
  },
  // Card carousel (5 cards in the mockup: Meet Paul, What's Keeping You Stuck?, What You Really Want, a 4th "...Tim[e]" card, +1)
  cardsIntro: {
    title: "[Section title]", // TODO: Paul's final section title
    intro: "[Optional one-line intro from Paul’s new copy]", // TODO
  },
  cards: [
    {
      id: "stuck",
      title: "What’s Keeping You Stuck?",
      teaser: "You’re trying to be everything to everyone.",
      body:
        "Between fatherhood, your relationship, work, finances, your health, and everything else life throws at you, there never seems to be enough time or energy left for yourself. You make progress for a while, but then life gets busy and old habits creep back in.",
      icon: "rings",
      tone: "blue",
    },
    {
      id: "paul",
      title: "Meet Paul",
      teaser: "Father. Husband. Certified Integrative Health Coach.",
      body: "", // filled from ABOUT.modal below
      icon: "dial",
      tone: "charcoal",
    },
    {
      id: "want",
      title: "What You Really Want",
      teaser: "You don’t need a new life. You want to show up as the dad you already know you can be.",
      body:
        "More energy for your kids. Keep up on the weekend without needing a nap. A body you trust. Feel strong and capable in your everyday life. A calmer head. Handle stress without taking it home with you.",
      icon: "heart",
      tone: "green",
    },
    {
      id: "wins",
      title: "One Small Win at a Time",
      teaser: "Progress is a series of steps you can actually keep.",
      body:
        "Move for ten minutes: a walk with the kids counts. Make one better choice at a meal: no strict plan, just one swap you can repeat. Protect your sleep: set a regular bedtime and keep it for a week. Check in with yourself: note what worked, then build on it next week.",
      icon: "steps",
      tone: "copper",
    },
  ],
  stuckPoints: [
    { title: "Too many plans, no follow-through", text: "You start strong, life gets busy, and the routine falls apart within weeks." },
    { title: "Everyone else comes first", text: "Work and family take every hour, so your own health is the first thing dropped." },
    { title: "All-or-nothing thinking", text: "One missed day feels like failure, so you quit instead of continuing." },
  ],
  wants: [
    { title: "More energy for your kids", text: "Keep up on the weekend without needing a nap." },
    { title: "A body you trust", text: "Feel strong and capable in your everyday life." },
    { title: "A calmer head", text: "Handle stress without taking it home with you." },
  ],
  smallWins: [
    { title: "Move for ten minutes", text: "A walk with the kids counts. Start where you are." },
    { title: "Make one better choice at a meal", text: "No strict plan, just one swap you can repeat." },
    { title: "Protect your sleep", text: "Set a regular bedtime and keep it for a week." },
    { title: "Check in with yourself", text: "Note what worked, then build on it next week." },
  ],
  closing: {
    headline: "[Closing headline]", // TODO: Paul's final closing headline
    text: "[One or two low-pressure lines from Paul]", // TODO
    guideLink: "or get the free guide →",
  },
};

export const REBUILD = {
  title: "The ReHealth ReBuild",
  heroTagline: "A coaching program for fathers who are ready to become the man they want to be.",
  heroBody: [
    "You know there are parts of your life you want to improve, but when your health, family, relationships, career, finances, and your own needs are all competing for attention, it can be hard to know where to start.",
    "ReHealth ReBuild helps you figure out what matters most right now and where it makes sense to start. From there, we focus on small changes you can actually stick with.",
  ],
  heroStrong: "The Complimentary Win Streak Strategy Call is where that process begins.",

  strategyCall: {
    title: "What Happens in the Win Streak Strategy Call",
    intro: "The Win Streak Strategy Call is a focused conversation about where you are now, where you want to be, and what may be getting in the way.",
    exploreLead: "Together we will explore:",
    explore: [
      "What areas of your life need the most attention right now",
      "What you would like to change",
      "What has made it difficult to create lasting progress",
    ],
    paras: [
      "This isn’t about trying to fix everything at once. It’s about stepping back, looking at the bigger picture, and identifying the right place to start.",
      "By the end of the call, you’ll leave with a better understanding of what’s been getting in your way and one realistic first step you can start working on.",
    ],
    strong: "This is how your win streak begins.",
  },

  bridge: {
    title: "The ReHealth ReBuild Bridge",
    paras: [
      "Becoming the man you want to be means looking beyond any one part of your life.",
      "Your health, home life, relationships, career, finances, and personal life are all connected. When one area is struggling, it can put pressure on the others. When you start strengthening one area, that progress can carry into the rest of your life.",
      "ReHealth ReBuild starts by looking at your whole bridge.",
      "Some parts of your bridge may already be pretty solid. Others might need some work. We’ll figure out together where it makes the most sense to focus first.",
      "You don’t need to work on every pillar at once.",
    ],
    strong:
      "The goal is to strengthen your bridge one small win at a time, so you can keep moving from where you are now toward the man you want to be.",
    endpoints: { start: "Where you are now", end: "The man you want to be" },
    // The six pillars shown on the bridge image
    pillars: [
      { id: "health", label: "Health" },
      { id: "home", label: "Home Life" },
      { id: "relationships", label: "Relationships" },
      { id: "career", label: "Career" },
      { id: "finances", label: "Finances" },
      { id: "personal", label: "Personal Life" },
    ],
  },

  rightForYou: {
    title: "Is ReHealth ReBuild Right for You?",
    intro: "ReHealth ReBuild is for fathers who know they want something to change, even if they haven’t figured out exactly what that looks like yet.",
    lead: "It may be right for you if:",
    items: [
      "You feel like you’re constantly trying to keep up with everything life demands of you",
      "You keep making changes, only to find yourself starting over again",
      "One or more areas of your life aren’t where you want them to be",
      "You know what you should be doing, but struggle to turn that knowledge into consistent action",
      "You want to be a better father, partner and man, while still making progress in the other parts of your life that matter to you.",
      "You’re tired of trying to change everything at once",
      "You’re ready to start making progress, one manageable step at a time",
    ],
    closing: "You don’t need to have everything figured out before we work together.",
    strong: "You just need to be ready to take the first step.",
  },

  different: {
    title: "What Makes ReHealth ReBuild Different?",
    lead: "Your life isn’t one-size-fits-all. Your coaching shouldn’t be either.",
    paras: [
      "ReHealth ReBuild isn’t about handing you a perfect plan and expecting you to rearrange your life around it.",
      "It’s about understanding where you are now, where you want to go, and what will realistically help you move forward.",
    ],
    points: [
      { title: "We figure out what actually needs your attention", text: "Your health, relationships, home life, career, finances, and personal growth are connected. We focus on the areas that matter most to you right now." },
      { title: "When life changes, the plan changes", text: "Work gets busy. Kids need you. Plans change. We adapt instead of treating those realities like failures." },
      { title: "We build on what’s working", text: "Every small win gives you something to build on. Over time, those wins create momentum, confidence, and meaningful change." },
    ],
    strong: "You don’t need another plan telling you how to live your life. You need an approach that helps you build a better one.",
  },

  together: {
    title: "What Working Together Looks Like",
    intro:
      "What we work on will be different for every dad. The way we work together is pretty simple. We talk regularly, decide what deserves your attention, and come up with something realistic to work on before we speak again.",
    points: [
      { title: "One-on-One Coaching", text: "Regular coaching conversations give us space to step back, look at what’s happening in your life, celebrate what’s working, and decide what deserves your attention next." },
      { title: "A Plan Built Around You", text: "There is no predetermined path through the six pillars. Together, we’ll identify your priorities and build a plan around the areas where change will have the greatest impact." },
      { title: "Something You Can Actually Do", text: "We turn bigger goals into manageable steps you can actually follow through on. The goal isn’t to do everything. It’s to keep moving forward." },
      { title: "Accountability and Support", text: "You won’t be left to figure everything out between sessions. We’ll track your progress, work through setbacks, and adjust when life inevitably gets in the way." },
      { title: "Tools and Resources When You Need Them", text: "When something would genuinely help, I’ll provide practical tools, exercises, or resources to support the work we’re doing together." },
    ],
    strong: "ReHealth ReBuild isn’t about following my plan. It’s about building yours.",
  },

  journey: {
    title: "Your ReHealth ReBuild Journey",
    intro:
      "ReHealth ReBuild isn’t about following a rigid program from beginning to end. Your journey will depend on where you are, what matters most to you, and what life throws your way.",
    lead: "But the process generally looks like this:",
    steps: [
      { title: "Figure Out Where You Are", text: "We step back and look at where you are now, where you want to be, and which areas of your life need the most attention." },
      { title: "Decide Where to Start", text: "We identify the pillar where a small change could create the most meaningful momentum right now." },
      { title: "Get Your First Win", text: "We turn that priority into a realistic action you can follow through on." },
      { title: "Keep Building", text: "We learn from what’s working, adjust what isn’t, and keep stacking small wins without trying to change everything at once." },
      { title: "Strengthen the Rest of Your Bridge", text: "As one area becomes stronger, we can turn our attention to another, gradually strengthening your bridge and moving you closer to the man you want to be." },
    ],
    strong: "Your path won’t look exactly like anyone else’s. That’s the point.",
  },

  ready: {
    title: "Ready to Start Your ReHealth ReBuild?",
    paras: [
      "You don’t need to know exactly what needs to change or have a perfect plan for getting there. That’s what the first conversation is for.",
      "During your Complimentary Win Streak Strategy Call, we’ll look at where you are now, where you want to go, and identify one realistic place to start.",
    ],
    strong: "The call is simply a chance for us to talk about where you’re at, what you’d like to change, and whether working together makes sense.",
  },
};

export const ABOUT = {
  title: "Meet Paul Sahota",
  subtitle: "Father of two. Husband. Certified Integrative Health Coach. Founder of ReHealth Dads.",

  // Current-site long form story
  story: {
    title: "My Story",
    paras: [
      "I’m a father of two, husband, Certified Integrative Health Coach, and the founder of ReHealth Dads. But ReHealth Dads really started with me trying to make changes in my own life.",
      "For years, I focused mainly on my health. I wanted to eat better, feel better, have more energy, and take better care of myself. But I was also a husband and a dad, with work, finances, family responsibilities, and all the usual stuff competing for my attention. I’d do well for a while, then life would get busy and I’d fall back into old habits.",
      "My son’s autism and our experiences as a family also changed the way I looked at things. They taught me a lot about patience, progress, and the fact that there isn’t one right way of doing things. Over time, I realized I wasn’t just trying to become healthier.",
    ],
    strongMid: "I was trying to become a better father, a better husband, and a better man.",
    paras2: [
      "That’s really where ReHealth Dads came from. I don’t have every part of my life figured out, and I don’t pretend to. I’m still working on many of the same things I help other dads work through. What I do have now is a better understanding of how to make changes that fit into real life, and how important it is to start with what matters most.",
    ],
    strong: "I’m still working on becoming the man I want to be too.",
  },

  // Newer "Meet Paul" modal copy (11-19 mockup)
  modal: {
    counter: "4 / 5",
    lead: "I’m a father, husband, Certified Integrative Health Coach, and the founder of ReHealth Dads.",
    paras: [
      "Like a lot of fathers, I spent years trying to balance my health, family, career, finances, and everything else life demanded of me. Along the way, I realized that becoming healthier was only one part of something much bigger.",
      "I wanted to become a better father, a better husband, and ultimately, a better version of myself.",
      "That journey became the foundation for ReHealth Dads.",
      "Today, I help busy fathers figure out where they feel stuck, identify what matters most, and start moving forward through small, sustainable wins.",
    ],
    strong: "I’m not here to help you become someone else. I’m here to help you become the man you want to be.",
  },

  conversations: {
    title: "Conversations I’ve Been Part Of",
    intro:
      "I’ve had the opportunity to share parts of my story and talk about fatherhood, family, health, and the experiences that have shaped ReHealth Dads.",
    items: [
      {
        title: "Holland Bloorview Kids Rehabilitation Hospital",
        text: "I share our family’s experience with autism, what it taught me about judgment and understanding, and why fathers need to look after themselves too.",
        cta: "Watch Here",
        kind: "video",
        href: LINKS.hollandBloorview,
      },
      {
        title: "Grandview Kids",
        text: "I talk about raising a son with autism, letting go of the fatherhood journey I once imagined, and learning to embrace the journey our family actually has.",
        cta: "Watch Here",
        kind: "video",
        href: LINKS.grandviewKids,
      },
      {
        title: "Self Explorers Club Podcast",
        text: "I talk about fatherhood, being a father, raising a son with autism, and how my own health journey led me to start supporting other dads.",
        cta: "Listen Here",
        kind: "podcast",
        href: LINKS.selfExplorersClub,
      },
    ],
  },

  howICoach: {
    title: "How I Coach",
    paras: [
      "My approach to coaching has been shaped by my own experiences. I know how easy it is to make an ambitious plan when you’re motivated, only to have work, family, or life get in the way a few weeks later.",
    ],
    strong1: "That’s why I’m much more interested in what you realistically can do than what you should be doing.",
    paras2: [
      "From my own experiences and challenges, I’ve seen how often fathers lack a space where they feel truly heard and supported. My coaching gives you that space to talk things through, reflect on what’s going on, and figure out what matters most right now, without judgment.",
      "I listen, ask questions, and help you turn those conversations into meaningful action. The goal is for you to leave each session knowing what you’re working toward and what you’re going to do next.",
    ],
    strong2: "Then we start small, get a win, and build from there.",
  },

  credentials: {
    title: "Credentials & Training",
    intro: "My coaching is shaped by two different approaches that help me look at both the bigger picture and the practical steps that move you forward.",
    items: [
      { org: "Institute for Integrative Nutrition (IIN)", program: "Health Coach Training Program", href: LINKS.iin },
      { org: "University of Toronto", program: "Brief Coaching Certification", href: LINKS.uoft },
    ],
    closing: "Together, these approaches influence how I coach today. We look at the bigger picture, figure out what matters most, and turn it into something you can realistically work on.",
  },

  goodFit: {
    title: "Think We Might Be a Good Fit?",
    paras: [
      "If something you’ve read here sounds familiar, and there’s an area of your life you’ve been wanting to work on, I’d be happy to talk.",
      "The Complimentary Win Streak Strategy Call gives us a chance to get to know each other, talk about what’s going on in your life, and see whether working together makes sense.",
    ],
  },
};

export const WRITING = {
  title: "Writing",
  // Notes from the Drive: blogs need their own page, with effects (not just an embedded Substack)
  author: "Paul Sahota",
  intro:
    "I write for fathers who want to become the man they want to be. Here you’ll find honest reflections and practical insights on health, relationships, fatherhood, work, and the small, sustainable wins that create meaningful change.",
  launched: "Launched 9 months ago",
  subscribe: {
    placeholder: "Type your email...",
    button: "Subscribe",
    legal: "Subscribing happens on Substack, so you’ll be taken there to confirm.",
  },
  featured: {
    title: "The Invisible Fathers: Has Society’s View of Fatherhood Kept Up?",
    excerpt: "The responsibilities of fathers have evolved, but the way we see them hasn’t always kept pace.",
  },
  posts: [
    { title: "Why Is It So Hard to Slow Down?", excerpt: "Why taking a break can feel like wasting time for a dad who’s always trying to get ahead.", date: "Nov 12" },
    { title: "Sometimes All a Father Needs Is to Be Seen", excerpt: "A father’s reflection on the invisible struggles of caregiving and the power of acknowledgement.", date: "Nov 5" },
    { title: "A Good Day Doesn’t Mean It Was an Easy Day", excerpt: "Why changing your expectations might help fathers recognize more of the good in our lives.", date: "Oct 29" },
    { title: "Don’t Let One Loss Become a Losing Streak", excerpt: "How remembering what went right might help fathers recover from a difficult day.", date: "Oct 22" },
    { title: "Before Your Patience Runs Out", excerpt: "How a short pause can help dads be more present when their kids need them most.", date: "Oct 15" },
    { title: "Just Get on Base", excerpt: "Why fathers don’t need a perfect day to turn the game around.", date: "Oct 8" },
    { title: "Some Risks Need Zero Tolerance", excerpt: "I know there are reasons why I’ve been struggling with my health. But this week I’ve started to question how often I use…", date: "Oct 1" },
  ],
  recommendations: ["alive unlocked", "Dr. Mark Hyman", "Konstantin Kisin", "Aligned with Chloe", "Versailles Century"],
};

export const FREE_GUIDE = {
  title: "Break Out of the Start-Stop Cycle",
  subtitle: "A free guide to help busy fathers build momentum, stay consistent, and stop feeling like they’re constantly starting over.",
  // Draft 1 form fields
  form: {
    title: "Get the free guide",
    fields: ["Name", "Email"],
    button: "Send me the guide",
  },
};

export const CONTACT = {
  title: "Contact",
  paras: [
    "Have a question about ReHealth Dads, coaching, or something I’ve written? Send me a message below. I’d be happy to hear from you.",
  ],
  callLead: "If you’re interested in working together, the best place to start is with a",
  callStrong: "Complimentary Win Streak Strategy Call",
  emailLabel: "Email",
  socialLabel: "Social Media",
  form: {
    firstName: "First name",
    email: "Email",
    message: "Type your message",
    // Draft 1 also had an "interest" dropdown
    interestLabel: "What would you like?",
    interests: ["The free guide", "A Win Streak Strategy Call", "A general question"],
    button: "Send Message",
  },
};

export const FOOTER = {
  links: NAV,
};

// Photo library (already copied to /public/images)
export const IMAGES = {
  logo: "/images/logo-original.jpg",
  paulSonShouldersA: "/images/paul-son-shoulders-wide-a.jpg",
  paulSonShouldersB: "/images/paul-son-shoulders-wide-b.jpg",
  paulBabyPortrait: "/images/paul-baby-portrait.jpg",
  paulSonsChair: "/images/paul-sons-chair.jpg",
  paulSonOutdoors: "/images/paul-son-outdoors.jpg",
  paulBabySleeping: "/images/paul-baby-sleeping.jpg",
  paulSonSky: "/images/paul-son-sky.jpg",
};
