export interface IBook {
  id: number;
  title: string;
  summary: string;
  rating: number;
  price: number;
  imageUrl?: string;
  hasBeenRead?: boolean;
}
