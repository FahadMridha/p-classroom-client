import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseMoreDetails = () => {
  const course = useLoaderData();
  const { name, picture, price, author, description } = course;
  return (
    <div>
      <h2 className="text-center text-lg font-bold my-3  text-slate-500 ">
        Welcome to {name} course.
      </h2>
      <button className="text-slate-500  btn">Download PDF</button>
      <div className="card w-9/12 glass mx-28 my-4">
        <figure>
          <img className="w-1/3" src={picture} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {name}</h2>
          <small>Author:{author}</small>
          <p>Price:${price}</p>
          <p className="text-slate-400">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-400 ">
              <Link to="/checkout">Get premium access!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMoreDetails;
