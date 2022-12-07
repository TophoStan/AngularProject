export interface IBook {
  id: string;
  title: string;
  summary: string;
  rating: number;
  price: number;
  imageUrl?: string;
  hasBeenRead?: boolean;
}
