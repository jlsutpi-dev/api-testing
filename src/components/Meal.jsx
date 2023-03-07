import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const Meal = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );

    const { meals } = await api.json();
    setMeals(meals);
    console.log(meals);
  };
  return (
    <div className=" flex justify-center flex-wrap gap-10 my-20">
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          {/* <img src={meal.strMealThumb} alt="" /> */}
          <MealCard key={meal.idMeal} image={meal.strMealThumb} id={meal.idMeal} title={meal.strMeal} />
        </div>
      ))}
      <MealCard />
    </div>
  );
};

export default Meal;
