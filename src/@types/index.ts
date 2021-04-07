export interface Product {
  id: string;
  price: string;
  maxresURL: string;
  description: string;
  thumbnailURL: string;
  currency: string;
}

export interface Sneaker extends Product {
  color: string;
}