import { ArrowRight } from "lucide-react";

export default function Tradition() {
  return (
    <section className="lg:px-32 md:px-20 px-4 flex justify-center mb-20">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:w-9/12">
        <div className="lg:w-[517px] w-full flex flex-col gap-y-6">
          <h1 className="text-4xl text-amber-700 font-title">
            Tradition <br /> & Family Recipes
          </h1>
          <p>
            Recipes are passed down from generations and we can assure that you
            are getting a genuine and authentic Thai experience.
          </p>
          <button className="flex justify-between w-[150px] py-2 px-4 bg-amber-700 text-white font-title">
            Menu
            <ArrowRight />
          </button>
        </div>

        <img
          src="asset/footer.png"
          alt="Thai tradition"
          className="mt-10 ml-10"
        />
      </div>
    </section>
  );
}
