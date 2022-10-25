import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseMoreDetails = () => {
  const course = useLoaderData();
  const { name, picture, price, author } = course;
  return (
    <div>
      <div className="card w-9/12 glass mx-28 my-4">
        <figure>
          <img className="w-1/3" src={picture} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {name}</h2>
          <small>Author:{author}</small>
          <p>Price:${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to="/checkout">Get premium access!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMoreDetails;
