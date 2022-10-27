import React from "react";
import img from "../../assets/images/Tile-min-1.jpg";
const Home = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img className="" src={img} alt="" />
      </div>
      <div className="text-orange-400">Welcome to out Online Course </div>
    </div>
  );
};

export default Home;
