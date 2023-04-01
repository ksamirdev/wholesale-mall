import { Product } from "@/types/Product";
import Image from "next/image";

export default function ProductsCard({
  image,
  title,
  price,
  rating,
  id,
  category,
  description,
}: Product) {
  return (
    <div className="flex flex-col min-h-[25rem] gap-3 p-5 rounded-2xl min-w-[25rem]  max-w-[25rem] bg-tertiary cursor-pointer">
      <div className="min-h-[15rem] self-center flex flex-col">
        <Image
          className="my-auto bg-cover"
          src={image}
          alt={title}
          height={150}
          width={150}
        />
      </div>
      <span className="flex flex-row items-start font-bold justify-between gap-5">
        <span>{title}</span>
        <span>${price}</span>
      </span>
      <span className="max-w-max overflow-hidden whitespace-nowrap overflow-ellipsis">
        {description}
      </span>
      <div className="text-center p-3 bg-secondary rounded-2xl font-bold text-quaternary text-lg">
        Add to Cart
      </div>
    </div>
  );
}
