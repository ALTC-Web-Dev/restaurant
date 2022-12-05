import { salad, appetizers, soups, noodleRice, dessert } from "../lib/menuFull";

export default function Menu() {
  return (
    <div className="bg-menu bg-no-repeat bg-cover min-w-full flex justify-center mt-20">
      <div className="bg-white rounded-lg w-full lg:w-4/12 flex flex-col gap-y-8 mx-4 mb-20">
        <div className="flex flex-col gap-y-4 p-8">
          <h2 className="text-amber-700 font-title font-semibold uppercase text-xl">
            Salad
          </h2>
          {salad.map(item => (
            <div key={item.id}>
              <p className="font-bold">{item.food}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 p-8">
          <h2 className="text-amber-700 font-title font-semibold uppercase text-xl">
            Appetizers
          </h2>
          {appetizers.map(item => (
            <div key={item.id}>
              <p className="font-bold">{item.food}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 p-8">
          <h2 className="text-amber-700 font-title font-semibold uppercase text-xl">
            Soups
          </h2>
          {soups.map(item => (
            <div key={item.id}>
              <p className="font-bold">{item.food}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 p-8">
          <h2 className="text-amber-700 font-title font-semibold uppercase text-xl">
            Noodle & Rice
          </h2>
          {noodleRice.map(item => (
            <div key={item.id}>
              <p className="font-bold">{item.food}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 p-8">
          <h2 className="text-amber-700 font-title font-semibold uppercase text-xl">
            Dessert
          </h2>
          {dessert.map(item => (
            <div key={item.id}>
              <p className="font-bold">{item.food}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
