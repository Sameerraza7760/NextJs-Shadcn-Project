"use client";
import React from "react";
import ToppingCard, { Topping } from "./topping-card";
import Jelapeno from "@/assets/jelapeno.png";
import Chicken from "@/assets/chicken.png";
import Cheese from "@/assets/cheese.png";
const toppings = [
  {
    id: "1",
    name: "Chicken",
    image: Chicken,
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "jelapeno",
    image: Jelapeno,
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: Cheese,
    price: 50,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = React.useState([toppings[0]]);

  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExists = selectedToppings.some(
      (element) => element.id === topping.id
    );

    if (isAlreadyExists) {
      setSelectedToppings((prev) =>
        prev.filter((elm) => elm.id !== topping.id)
      );
      return;
    }

    setSelectedToppings((prev) => [...prev, topping]);
  };

  return (
    <section className="mt-6">
      <h3>Extra toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              topping={topping}
              key={topping.id}
              selectedToppings={selectedToppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;
