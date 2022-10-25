import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { picture, name, author } = course;
  return (
    <div className="h-9/12">
      <Link to={`/courses/${course.id}`}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-9/12" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title: {name}</h2>
            <h4>Author- {author}</h4>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseDetails;
