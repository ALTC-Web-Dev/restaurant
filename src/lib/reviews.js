import { Star } from "lucide-react";

export const reviews = [
  {
    id: 1,
    img: "asset/review1.png",
    stars: (
      <div className="flex gap-x-4">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    ),
    review:
      "'Excellent Thai food for affordable prices, the restaurant being packed on a weekday speaks volume. The portions were more than sufficient. Highlights include horfun, minced meat omelette and garlic chicken. Overall, good for value and delicious Thai food.'",
  },
  {
    id: 2,
    img: "asset/review2.png",
    stars: (
      <div className="flex gap-x-4">
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    ),
    review:
      "'Tomyum thick soup was smooth and flavourful, basil pork was on point goes very well with the rice. Lemon chicken was crispy however taste rather bland.Overall a meal worth coming back to!'",
  },
  {
    id: 3,
    img: "asset/review3.png",
    stars: (
      <div className="flex gap-x-4">
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    ),
    review:
      "'Food portions were great for their price and had lots of ingredients for the staples like pineapple fried rice, pad thai. Although you might see a long queue outside, their turnover was pretty quick so you wouldn’t need to wait for long.'",
  },
];
