import React from "react";
// import Meal from "./Meal";
import "./MealCard.css";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const MealCard = ({ image, title,id }) => {
  return (
    <div className="parent relative rounded-lg">
      <div className="rounded-lg parent-img">
      <img src={image} className="v  max-h-[300px] rounded-lg object-cover" alt="" />
      </div>
      <h2 className="text-md truncate font-bold my-5 tracking-middle text-gray-500">{title}</h2>
      <Link to={`/detail/${id}`}>
        <p className=" absolute icon top-[40%] left-[40%] bg-orange-600 text-center text-white flex justify-center align-middle items-center w-12 h-12 rounded-[100%]">
          <BiSearchAlt className="  text-3xl" />
        </p>
      </Link>
    </div>
  );
};

export default MealCard;
