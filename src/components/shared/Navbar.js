import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="min-w-full bg-white flex justify-between items-center lg:px-32 md:px-10 px-4 py-4 drop-shadow-sm">
      <img src="/asset/logo.png" alt="Logo" className="w-40" />
      <div className="flex gap-x-6">
        <p>Menu</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <button className="flex justify-between w-[180px] py-2 px-4 bg-amber-700 text-white font-title">
        Book a Table
        <ArrowRight />
      </button>
    </div>
  );
}
