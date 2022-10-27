import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/images/Tile-min-1.jpg";
const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <div>
        <img className="" src={img} alt="" />
      </div>
      <div className="text-orange-400 text-center text-4xl my-auto">
        <h2 className="text-center">Welcome to our Online Course.</h2>
        <p className="text-orange-500 text-center text-2xl my-auto">
          A programming language is a system of notation for writing computer
          programs.Most programming languages are text-based formal languages,
          but they may also be graphical. They are a kind of computer language.
        </p>
        <Link to="/courses">
          <button className="btn my-3">Explore Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
