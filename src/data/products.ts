export type BouquetPrice = {
  size: string;
  stems: string;
  fullRoses: string[];
  mixedFlowers: string[];
};

export type PremiumProduct = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export type CatalogItem = {
  name: string;
  category: string;
  price?: string;
};

export const whatsappUrl = "https://wa.me/6285817919717";
export const phoneNumber = "+62 858 1791 9717";
export const instagram = "@dfleurise.id";
export const location = "Karawaci, Tangerang, Indonesia";

export const bouquetPrices: BouquetPrice[] = [
  {
    size: "Mini",
    stems: "3 stems",
    fullRoses: ["150K"],
    mixedFlowers: ["150K"],
  },
  {
    size: "Medium",
    stems: "7 stems",
    fullRoses: ["285K"],
    mixedFlowers: ["300K"],
  },
  {
    size: "Medium",
    stems: "10 stems",
    fullRoses: ["350K"],
    mixedFlowers: ["375K"],
  },
  {
    size: "Large",
    stems: "15 stems",
    fullRoses: ["400K"],
    mixedFlowers: ["425K"],
  },
  {
    size: "Large",
    stems: "20 stems",
    fullRoses: ["Red: 485K", "Others: 450K"],
    mixedFlowers: ["515K"],
  },
  {
    size: "XXL",
    stems: "40 stems",
    fullRoses: ["Red: 785K", "Others: 750K"],
    mixedFlowers: ["Ask Admin"],
  },
  {
    size: "Bespoke",
    stems: "More than 40 stems",
    fullRoses: ["Ask Admin"],
    mixedFlowers: ["Ask Admin"],
  },
];

export const addOns = [
  ["Card", "5K"],
  ["Card + Envelope", "15K"],
  ["Teddy Bear", "25K"],
  ["Polynet", "15K"],
  ["Polaroid", "30K"],
  ["Silverqueen", "25K"],
  ["Cadbury", "30K"],
  ["Delfi", "20K"],
];

export const flowerColors = ["Pink", "White", "Yellow", "Purple", "Blue", "Red", "Nude/Brown"];

export const premiumProducts: PremiumProduct[] = [
  {
    name: "Red Obsidian",
    description: "Red, Bold, Elegant",
    price: "375K",
    image:
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Pink Paradise",
    description: "Cute, Feminine, Classy",
    price: "375K",
    image:
      "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1400&q=85",
  },
];

export const freshSeries: CatalogItem[] = [
  { name: "Korean Baby Cloud", category: "Fresh Series" },
  { name: "Classic Pastel", category: "Fresh Series" },
  { name: "Everyday Love You", category: "Fresh Series" },
  { name: "Classic Blush Charm", category: "Fresh Series" },
  { name: "Romantic Red", category: "Fresh Series" },
  { name: "Bold Garden Style", category: "Fresh Series" },
  { name: "Full Size Gompies", category: "Fresh Series" },
  { name: "Full Size Sunflo", category: "Fresh Series" },
  { name: "Baby Breath Lilac", category: "Fresh Series" },
  { name: "Classic Hydrangea", category: "Fresh Series" },
];

export const artificialSeries: CatalogItem[] = [
  { name: "Premium Michelle Bouquet", category: "Premium Series" },
  { name: "Red Obsidian", category: "Premium Series", price: "375K" },
  { name: "Pink Paradise", category: "Premium Series", price: "375K" },
  { name: "Anderson Grad", category: "Graduation" },
  { name: "Baby Bluey Grad", category: "Graduation" },
  { name: "Baby Purple Grad", category: "Graduation" },
  { name: "Michelle Grad", category: "Graduation" },
  { name: "Royal Grad", category: "Graduation" },
  { name: "Bride To Be", category: "Celebration" },
  { name: "Dreamy Pink Orchid", category: "Vases" },
  { name: "Rainbow Grand Box", category: "Bloombox" },
  { name: "Blue-Gold Balloonbox", category: "Balloon Box" },
];

export const weddingItems: CatalogItem[] = [
  { name: "Round Bouquet", category: "Wedding Bouquet", price: "Start from 650K" },
  { name: "Classic Round Bouquet", category: "Wedding Bouquet" },
  { name: "Flexed Round Bouquet", category: "Wedding Bouquet" },
  { name: "White Single Rose", category: "Additional Items", price: "Fresh" },
  { name: "White Rose Petals", category: "Additional Items", price: "20 pax" },
];
