import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Nav.css"

const Navbar = () => {
  return (
    <div className=" flex justify-around shadow p-7 items-center rounded-lg ">
      <Link to={"/"}>
        <GiKnifeFork className=" text-3xl" />
      </Link>
      <div>
        <input
          type="text"
          className=" nav-form-input w-[200px] p-1 border rounded-lg"
          placeholder=" Search"
        />
      </div>
    </div>
  );
};

export default Navbar;
