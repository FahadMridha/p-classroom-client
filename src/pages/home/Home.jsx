import React from "react";
import bg from "../../assets/images/Tile-min-1.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: URL(bg),
      }}
    >
      <h3>Home </h3>
    </div>
  );
};

export default Home;
