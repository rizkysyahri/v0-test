import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col max-h-screen">
      <main className="flex-grow"> {/* Konten utama */}
        <h1 className="text-center mt-20">Halo Dunia!</h1>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        Sponsored by <span className="font-bold">Myself</span>
      </footer>
    </div>
  );
}
