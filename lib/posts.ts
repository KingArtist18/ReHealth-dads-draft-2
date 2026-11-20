export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "the-twenty-minute-rule",
    title: "The 20-Minute Rule for Dads Who Have No Time",
    excerpt:
      "You don't need a gym. You need a repeatable 20 minutes and a rule that stops you from skipping it.",
    date: "2025-01-14",
    readingTime: "5 min",
    category: "Movement",
    body: "Full post content goes here — swap in the real article from the Drive folder.",
  },
  {
    slug: "protein-for-the-whole-family",
    title: "Protein for the Whole Family (Without a Second Dinner)",
    excerpt:
      "How to hit your protein target while feeding kids who refuse anything green.",
    date: "2025-01-02",
    readingTime: "7 min",
    category: "Nutrition",
    body: "Full post content goes here.",
  },
  {
    slug: "sleep-before-supplements",
    title: "Fix Sleep Before You Buy a Single Supplement",
    excerpt:
      "The order of operations for tired fathers: sleep, light, caffeine — in that order.",
    date: "2024-12-19",
    readingTime: "6 min",
    category: "Recovery",
    body: "Full post content goes here.",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}