// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Response } from "@/types/API";
import { Product } from "@/types/Product";

import axios from "axios";
import cache from "memory-cache";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (
    req.query.page == undefined ||
    req.query.limit == undefined ||
    Array.isArray(req.query.page) ||
    Array.isArray(req.query.limit)
  )
    return;

  let fetchProducts: Product[];
  const cached = cache.get("Products");

  if (cached) {
    fetchProducts = cached;
  } else {
    const { data } = await axios.get(`${process.env.BACKEND}/products`);
    fetchProducts = data;
    cache.put("Products", data, 86400000);
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = fetchProducts.slice(startIndex, endIndex);

  const nextPage = page + 1;
  const hasMore = endIndex < fetchProducts.length;

  res.status(200).send({
    page,
    limit,
    total: fetchProducts.length,
    results,
    nextPage,
    hasMore,
  });
}
