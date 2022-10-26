import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { picture, name, author, price } = course;
  return (
    <div className="h-1/2">
      <Link to={`/courses/${course.id}`}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-96 w-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body bg-slate-500">
            <h2 className="card-title">Title: {name}</h2>
            <p className="text-lg"> price:${price}</p>
            <h4 className="text-xl">Author- {author}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseDetails;
