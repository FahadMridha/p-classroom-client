import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { picture, name, author } = course;
  return (
    <div className="">
      <Link to={`/courses/${course.id}`}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-1/3 w-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title: {name}</h2>
            <h4 className="text-xl">Author- {author}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseDetails;
