export interface ProductTag {
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  image: string;
  region: string;
  subtitle: string;
  price: string;
  reviews: number;
  rating: number;
  href: string;
  link: string;
  tag: ProductTag | null;
  description: string;
}

export const products: Product[] = [
  {
    slug: "joud-lebanese-olive-oil-classic",
    name: "Joud Lebanese Olive Oil - Classic",
    image: "/products/olive-oil-classic.png", // update with actual hosted image path
    region: "Bekaa Valley, Lebanon",
    subtitle: "Unfiltered - Cold Pressed - Authentic Lebanese",
    price: "$21.95",
    reviews: 44,
    rating: 4.4,
    href: "/products/joud-lebanese-olive-oil-classic",
    link: "https://www.amazon.com/Joud-Olive-Oil-Lebanese-Unfiltered/dp/B0BRDD37H6",
    tag: { label: "Olive Oil" },
    description: "A robust, unfiltered olive oil with a fruity aroma and peppery finish. Perfect for salads and dipping.",
  },
  {
    slug: "joud-lebanese-olive-oil-classic-2",
    name: "Joud Lebanese Olive Oil - Classic",
    image: "/products/olive-oil-classic.png", // update with actual hosted image path
    region: "Bekaa Valley, Lebanon",
    subtitle: "Unfiltered - Cold Pressed - Authentic Lebanese",
    price: "$21.95",
    reviews: 44,
    rating: 4.4,
    href: "/products/joud-lebanese-olive-oil-classic-2",
    link: "https://www.amazon.com/Joud-Olive-Oil-Lebanese-Unfiltered/dp/B0BRDD37H6",
    tag: { label: "Olive Oil" },
    description: "A robust, unfiltered olive oil with a fruity aroma and peppery finish. Perfect for salads and dipping.",
  },
  {
    slug: "joud-lebanese-olive-oil-classic-3",
    name: "Joud Lebanese Olive Oil - Classic",
    image: "/products/olive-oil-classic.png", // update with actual hosted image path
    region: "Bekaa Valley, Lebanon",
    subtitle: "Unfiltered - Cold Pressed - Authentic Lebanese",
    price: "$21.95",
    reviews: 44,
    rating: 4.4,
    href: "/products/joud-lebanese-olive-oil-classic-3",
    link: "https://www.amazon.com/Joud-Olive-Oil-Lebanese-Unfiltered/dp/B0BRDD37H6",
    tag: { label: "Olive Oil" },
    description: "A robust, unfiltered olive oil with a fruity aroma and peppery finish. Perfect for salads and dipping.",
  },
  {
    slug: "joud-lebanese-olive-oil-classic-4",
    name: "Joud Lebanese Olive Oil - Classic",
    image: "/products/olive-oil-classic.png", // update with actual hosted image path
    region: "Bekaa Valley, Lebanon",
    subtitle: "Unfiltered - Cold Pressed - Authentic Lebanese",
    price: "$21.95",
    reviews: 44,
    rating: 4.4,
    href: "/products/joud-lebanese-olive-oil-classic-4",
    link: "https://www.amazon.com/Joud-Olive-Oil-Lebanese-Unfiltered/dp/B0BRDD37H6",
    tag: { label: "Olive" },
    description: "A robust, unfiltered olive oil with a fruity aroma and peppery finish. Perfect for salads and dipping.",
  },
  {
    slug: "joud-lebanese-olive-oil-classic-5",
    name: "Joud Lebanese Olive Oil - Classic",
    image: "/products/olive-oil-classic.png", // update with actual hosted image path
    region: "Bekaa Valley, Lebanon",
    subtitle: "Unfiltered - Cold Pressed - Authentic Lebanese",
    price: "$21.95",
    reviews: 44,
    rating: 4.4,
    href: "/products/joud-lebanese-olive-oil-classic-5",
    link: "https://www.amazon.com/Joud-Olive-Oil-Lebanese-Unfiltered/dp/B0BRDD37H6",
    tag: { label: "Olive Oil" },
    description: "A robust, unfiltered olive oil with a fruity aroma and peppery finish. Perfect for salads and dipping.",
  },
];
