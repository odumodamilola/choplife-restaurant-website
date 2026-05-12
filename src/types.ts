export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  badges?: string[];
  isFeatured?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  label: string;
  count: number;
}
