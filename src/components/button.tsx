"use client";

import Image from "next/image";
import * as React from "react";

export default function Button() {
  const [clicked, setClicked] = React.useState(false);
  const [clickCount, setClickCount] = React.useState(0);

  React.useEffect(() => {
    const storedCount = localStorage.getItem("clickCount");
    if (storedCount) {
      setClickCount(parseInt(storedCount, 10));
    }

    const hasClicked = sessionStorage.getItem("userClicked");
    if (hasClicked) {
      setClicked(true);
    }
  }, []);

  const handleClick = () => {
    if (!clicked) {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      localStorage.setItem("clickCount", newCount.toString());

      sessionStorage.setItem("userClicked", "true");
      setClicked(true);
    }
  };

  const handleReset = () => {
    sessionStorage.removeItem("userClicked");
    setClicked(false);
  };

  return (
    <div className="text-center">
      <button onClick={handleClick}>
        {clicked ? (
          <div className="flex flex-col items-center gap-10">
            <p className="text-lg font-semibold underline underline-offset-1">
              Gada solusi kocaq, masalah masalah lu
            </p>
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

      <div className="flex items-center justify-center gap-5">
        {clicked && (
          <button
            onClick={handleReset}
            className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition"
          >
            Masukkan promp
          </button>
        )}

        <p className="mt-4 text-sm font-medium">Views {clickCount}</p>
      </div>
    </div>
  );
}
