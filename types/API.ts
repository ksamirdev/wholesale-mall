import { Product } from "./Product";

export interface Response {
  page: number;
  limit: number;
  total: number;
  nextPage: number;
  hasMore: boolean;
  results: Product[];
}
