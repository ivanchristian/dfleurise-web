export type Category = {
  title: string;
  description: string;
  image: string;
  group: "Fresh" | "Artificial" | "Wedding";
  tags?: string[];
};

export const categories: Category[] = [
  {
    title: "Fresh Bouquet",
    group: "Fresh",
    description: "Mini, medium, large, XXL, and human-size fresh bouquets in roses or mixed flowers.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85",
    tags: ["Full Roses", "Mixed Flowers", "Fresh Flowers"],
  },
  {
    title: "Fresh Series",
    group: "Fresh",
    description: "Signature fresh designs including Korean Baby Cloud, Classic Pastel, Romantic Red, and Sunflo.",
    image:
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85",
    tags: ["Korean Baby Cloud", "Classic Pastel", "Romantic Red"],
  },
  {
    title: "Fresh Bloombox",
    group: "Fresh",
    description: "Elegant boxed arrangements and custom bloom boxes for birthdays, romance, and gifting.",
    image:
      "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=1200&q=85",
    tags: ["Bloombox", "Hydra Box", "Red Classic Box"],
  },
  {
    title: "Artificial Bouquet",
    group: "Artificial",
    description: "Long-lasting bouquets for birthdays, graduations, bride-to-be moments, and keepsakes.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
    tags: ["Mini", "Medium", "Large", "Human Sized"],
  },
  {
    title: "Artificial Premium Series",
    group: "Artificial",
    description: "Premium artificial statement pieces including Red Obsidian, Pink Paradise, and Michelle bouquet.",
    image:
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=85",
    tags: ["Premium", "Red Obsidian", "Pink Paradise"],
  },
  {
    title: "Artificial Bloombox & Vases",
    group: "Artificial",
    description: "Custom vases, bloom boxes, balloon boxes, and decorative floral gifts.",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=85",
    tags: ["Vases", "Balloon Box", "Custom"],
  },
  {
    title: "Wedding Round Bouquet",
    group: "Wedding",
    description: "Classic and flexed bridal round bouquets for intimate ceremonies and wedding portraits.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
    tags: ["Classic", "Flexed", "Bridal Bouquet"],
  },
  {
    title: "Wedding Additional Items",
    group: "Wedding",
    description: "Fresh white single roses and white rose petals prepared for wedding moments.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    tags: ["White Single Rose", "Rose Petals", "Fresh"],
  },
];

export const catalogGroups = [
  {
    title: "Fresh 2025",
    description: "Fresh flowers, full roses, mixed bouquets, fresh series, bloom boxes, custom arrangements, and vases.",
    items: [
      "Fresh Bouquet",
      "Fresh Series",
      "Fresh Bloombox",
      "Custom Bloombox & Vases",
      "Picks For Her",
      "Picks For Him",
      "The One",
      "Human Size",
    ],
  },
  {
    title: "Artificial 2025",
    description: "Long-lasting artificial bouquets, graduation pieces, premium series, bloom boxes, balloon boxes, and vases.",
    items: [
      "Artificial Bouquet",
      "Korean Style",
      "Premium Series",
      "Graduation Bouquet",
      "Bride To Be",
      "Artificial Vases",
      "Custom Vases",
      "Human Sized",
    ],
  },
  {
    title: "Wedding",
    description: "Wedding round bouquets with additional fresh ceremonial details.",
    items: ["Round Bouquet", "Classic", "Flexed", "White Single Rose (Fresh)", "White Rose Petals (20 pax)"],
  },
];
