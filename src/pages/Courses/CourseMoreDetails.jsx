import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const CourseMoreDetails = () => {
  const course = useLoaderData();
  const { name, picture, price, author, description, id, language } = course;

  return (
    <div>
      <div className="bg-slate-900 text-end p-4 mb-4">
        <Pdf targetRef={ref} filename="course.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="text-slate-500  btn">
              Download PDF
            </button>
          )}
        </Pdf>
      </div>
      <div className="" ref={ref}>
        <h2 className="text-center text-2xl font-bold my-3  text-slate-500 ">
          Details of {name} course.
        </h2>

        <div className="card w-9/12 glass mx-auto my-4">
          <figure>
            <img className="w-1/3 " src={picture} alt="car!" />
          </figure>
          <div className="card-body text-slate-400">
            <h2 className="card-title">Title: {name}</h2>
            <small>Author:{author}</small>
            <p className="text-slate-400">Version: {language}</p>
            <p className="text-slate-300">Price:${price}</p>
            <p className="text-slate-400">{description}</p>
            <div className="card-actions justify-end">
              <button className="btn font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-400 ">
                <Link to={`/checkout/${id}`}>Get premium access!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMoreDetails;
