export type Product = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
};

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "001",
    name: "Product 001",
    slug: "product-001",
    imageUrl: "image_001.jpg",
  },
  {
    id: "002",
    name: "Product 002",
    slug: "product-002",
    imageUrl: "image_002.jpg",
  },
  {
    id: "003",
    name: "Product 003",
    slug: "product-003",
    imageUrl: "image_003.jpg",
  },
];
