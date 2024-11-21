"use client";

import Image from "next/image";
import * as React from "react";

export default function Button() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <button onClick={handleClick}>
      {clicked ? (
        <div className="flex flex-col  items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Image
              src="/images/fuck.png"
              alt="image"
              width={500}
              height={500}
            />
            <Image
              src="/images/toleh.jpeg"
              alt="image"
              width={500}
              height={500}
              className="h-[300px] w-auto"
            />
          </div>
        </div>
      ) : (
        <div className="px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-neutral-800 transition text-lg">
          Klik Ini
        </div>
      )}
    </button>
  );
}
