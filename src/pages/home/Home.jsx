import React from "react";
import { Link } from "@react-icons/all-files/fa/FaBeer";
import { HiArrowNarrowRight } from "react-icons/fa";
import img from "../../assets/images/Tile-min-1.jpg";
const Home = () => {
  return (
    <div className=" sm:flex-col  ">
      <div>
        <img className="" src={img} alt="" />
      </div>
      <div className="text-orange-400 text-center text-2xl">
        <h2 className="text-center">Welcome to our Online Course.</h2>
        <Link to="/courses">
          <button className="btn">
            Explore Courses <HiArrowNarrowRight></HiArrowNarrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
