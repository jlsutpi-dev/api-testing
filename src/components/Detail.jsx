import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});
  const [instructions, setInstructions] = useState(true);
  const [ingredients, setIngredients] = useState(false);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    console.log(meals[0]);
  };
  const toggleInstructionsAndIngredients = (showInstruction) => {
    setInstructions(showInstruction);
    setIngredients(!showInstruction);
  };
  return (
    <div className=" mx-auto w-[80%] my-20 gap-10 flex flex-wrap lg:flex-nowrap  pt-1">
      <img
        src={meals.strMealThumb}
        className="  h-[350px]  rounded-xl lg:h-[600px] object-cover"
        alt=""
      />
      <div>
        <h1 className=" text-2xl font-semibold my-5 tracking-wide text-gray-500">
          {meals.strMeal}
        </h1>
        <h2 className=" text-md font-semibold mb-5  rounded-xl w-32 text-white text-center bg-gray-700">
          {meals.strArea}
        </h2>
        <h2 className=" text-xl font-semibold tracking-wide mb-3 ">
          {meals.strCategory}
        </h2>

        <div className=" flex gap-20 justify-start my-3">
          <button
            onClick={() => {
              toggleInstructionsAndIngredients(true);
            }}
            className=" activeInstructionBtn px-2 py-2 bg-white active:bg-gray-900 text-lg  hover:bg-gray-900 hover:text-white  border rounded-md"
          >
            Instructions
          </button>
          <button
            onClick={() => {
              toggleInstructionsAndIngredients(false);
            }}
            className="activeIngredientBtn px-2 py-2 bg-white text-lg  hover:bg-gray-900 hover:text-white  border rounded-md"
          >
            Ingredients
          </button>
        </div>
        <div className={`${instructions ? "" : "hidden"}`}>
          <h1 className="">Instructions</h1>
          <p className=" text-gray-500 tracking-wide mb-5 leading-8 ">
            {meals.strInstructions}
          </p>
          <h1 className=" text-2xl tracking-wide my-3 text-gray-600  leading-8 ">
            Watch on YouTube
          </h1>
          <a href={meals.strYoutube} className="">
            <BsYoutube className=" text-red-500 text-3xl" />
          </a>
        </div>

        <div className={`${ingredients ? "" : "hidden"} mb-20`}>
          <h2 className=" text-xl font-semibold mb-5 tracking-wide text-gray-500 ">
            Ingredients
          </h2>
          <ul className="  ">
            {Object.keys(meals).map((key) => {
              if (key.includes("strIngredient") && meals[key]) {
                return (
                  <li key={key} className="leading-7 mb-1 list-square">
                    {meals[key]}
                  </li>
                );
              }
            })}
          </ul>
          <h1 className=" text-2xl tracking-wide my-3 text-gray-600  leading-8 ">
            Watch on YouTube
          </h1>
          <a href={meals.strYoutube} className="">
            <BsYoutube className=" text-red-500 text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
