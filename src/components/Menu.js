import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { menuInfo } from "../lib/menuInfo";

export default function Menu() {
  return (
    <section className="lg:px-32 md:px-20 px-4 bg-hero bg-cover bg-no-repeat min-h-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center lg:flex-row justify-around flex-wrap lg:w-9/12 w-full py-10 mb-20">
        <img
          src="/asset/noodles.png"
          alt="Boat noodles"
          className="lg:mr-10 lg:mb-20 max-w-[400px]"
        />
        <div className="flex flex-col justify-center lg:w-[500px] gap-y-6 mt-10">
          <h1 className="font-title text-amber-700 text-5xl my-4">
            The Finest <br /> Thai Cuisine
          </h1>
          <p>
            At Thai Phuket, we thrive at creating the best Thai dish. <br />{" "}
            With over 50 dishes to choose from, explore what our menu has to
            offer.
          </p>
          <Link to="menu">
            <button className="flex justify-between w-[150px] py-2 px-4 bg-amber-700 text-white font-title">
              Menu
              <ArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-wrap lg:flex-row justify-center gap-10">
        {menuInfo.map(item => (
          <div key={item.id} className="flex flex-col gap-y-8 w-[250px]">
            <img src={item.img} alt={item.name} className="w-[200px]" />
            <div>
              <span className="bg-[#CA8E74] rounded-tl-3xl rounded-br-3xl py-2 px-4 text-white font-title text-4xl mr-4">
                {item.id}
              </span>
              <span className="text-amber-700 text-4xl font-title">
                {item.name}
              </span>
            </div>
            <p className="text-center ">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
