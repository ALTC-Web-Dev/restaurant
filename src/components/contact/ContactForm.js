import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="lg:px-32 md:px-20 px-4 pt-20 mb-10 flex justify-around items-center ">
      <img
        src="/asset/contact.png"
        alt="Frying with wok"
        className="lg:w-4/12 lg:block hidden"
      />
      <div className="lg:px-10 flex flex-col justify-center w-full lg:w-6/12">
        <h1 className="font-title text-amber-700 text-2xl font-semibold mb-4">
          How can we help you?
        </h1>
        <form className="w-full flex flex-col gap-y-6">
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-amber-700">Name</label>
            <input
              type="text"
              className="p-2 border border-[#F6D4C5] bg-white rounded outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-amber-700">Email</label>
            <input
              type="email"
              className="p-2 border border-[#F6D4C5] bg-white rounded outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-amber-700">
              Contact Number
            </label>
            <input
              type="text"
              className="p-2 border border-[#F6D4C5] bg-white rounded outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-amber-700">Subject</label>
            <input
              type="text"
              className="p-2 border border-[#F6D4C5] bg-white rounded outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-amber-700">Message</label>
            <textarea
              type="text"
              className="p-2 border border-[#F6D4C5] bg-white rounded outline-none"
            />
          </div>
          <button className="flex justify-between w-[180px] py-2 px-4 bg-amber-700 text-white font-title">
            Submit
            <ArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}
