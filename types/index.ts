export interface Image {
  id: number;
  image: string;
  color: string;
  productId: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  mainCategory: string;
  subCategory: string;
  size?: string[];
  images?: Image[];
}

export interface CartItem extends Product {
  quantity: number;
}
