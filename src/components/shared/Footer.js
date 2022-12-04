import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="min-w-full bg-white flex flex-col lg:px-32 md:px-10 px-4 pt-6 pb-16 border-t">
      <div className="flex flex-col lg:flex-row  gap-y-6 justify-between items-center">
        <img src="asset/logo.png" alt="Logo" className="w-40" />
        <div className="flex gap-x-8">
          <p>Menu</p>
          <p>Contact Us</p>
        </div>
        <div className="flex gap-x-6">
          <div className="p-2 rounded-full text-white bg-[#CA8E74]">
            <Facebook />
          </div>
          <div className="p-2 rounded-full text-white bg-[#CA8E74]">
            <Twitter />
          </div>
          <div className="p-2 rounded-full text-white bg-[#CA8E74]">
            <Instagram />
          </div>
        </div>
      </div>
      <div className="text-amber-700 text-sm text-center mt-8">
        Copyright 2022 by Thai Phuket. All rights reserved.
      </div>
    </footer>
  );
}
