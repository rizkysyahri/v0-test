import Button from "@/components/button";

export default function Home() {
  return (
    <main className="mx-2 my-10">
      <div className="flex flex-col items-center justify-center mt-32 text-gray-900">
        <h1 className=" text-3xl text-center lg:text-5xl font-extrabold">
          <span className="bg-green-600 text-white px-2">SOLUSI</span> Terbaik untuk Masalah Anda 🔮
        </h1>
        <div className="mx-auto max-w-sm lg:max-w-2xl text-lg text-center my-10 lg:text-2xl font-semibold">
          <p>
            Memberikan rasa penasaran, nanti AI ini akan menganerate promp yang
            akan kamu masukkan,{" "}
            <span className="text-[#717171]">
              yaps solusinya klik dibawah ini
            </span>
          </p>
        </div>
        <Button />
      </div>
    </main>
  );
}
