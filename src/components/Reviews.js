import { reviews } from "../lib/reviews";

export default function Reviews() {
  return (
    <section className="lg:px-32 md:px-20 px-4 mb-40">
      <h1 className="font-title text-amber-700 text-center text-4xl my-20">
        Our Happy Customers
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {reviews.map(item => (
          <div
            key={item.id}
            className="border border-amber-700 rounded-md bg-white text-amber-700 px-8 py-10 flex flex-col justify-center items-center gap-y-6 w-[350px] h-[500px]"
          >
            <img src={item.img} alt={item.img} />
            {item.stars}
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
