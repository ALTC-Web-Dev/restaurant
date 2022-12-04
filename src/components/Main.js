import { ArrowRight } from "lucide-react";

export default function Main() {
  return (
    <main className="lg:px-32 md:px-20 px-4 pt-20 mb-10">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col gap-y-8 lg:w-[614px] w-full">
          <h1 className="font-title text-5xl text-amber-700">
            An Ambient <br /> Dining Experience
          </h1>
          <p>
            Join us at the table as you dine for the perfect meal. <br /> We
            treat all of our customers with utmost care and service.
          </p>
          <p>Have a toast and enjoy our fine drinks while you’re at it.</p>
          <div className="flex gap-x-8">
            <button className="bg-neutral-900 text-white px-4 py-2 flex justify-between w-[180px] font-title">
              Contact Us <ArrowRight />
            </button>
            <button className="bg-amber-700 text-white px-4 py-2 flex justify-between w-[180px] font-title">
              Menu <ArrowRight />
            </button>
          </div>
        </div>
        <img
          src="/asset/hero.png"
          alt="Main image collage"
          className="hidden lg:block lg:w-5/12 md:w-3/5"
        />
      </div>
    </main>
  );
}
