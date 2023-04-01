import Image from "next/image";
import React from "react";

export default function Advertisement() {
  return (
    <div className="bg-quaternary rounded-2xl p-5 flex flex-row items-center justify-around">
      <div className="flex flex-col gap-10 items-start">
        <div className="text-7xl max-w-[90%] font-bold text-secondary">
          Pepsi so cheap cmon buy!
        </div>

        <div className="px-5 py-3 cursor-pointer bg-[#554730] rounded-full text-neutral-100 font-bold text-lg ">
          Buy Now
        </div>
      </div>
      <div>
        <Image
          src="/pepsi.jpg"
          alt="Ad"
          height={100}
          width={500}
          draggable={false}
        />
      </div>
    </div>
  );
}
