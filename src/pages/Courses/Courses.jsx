import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    fetch("https://classroom-server-zeta.vercel.app")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
      <div className="ml-5 ">
        <h3>Total courses:{courses.length}</h3>
        {courses.map((course) => (
          <p
            className="text-lg text-center py-2 text-slate-500 hover:text-slate-400 hover:bg-slate-900 font-semibold border-2 border-slate-600 rounded-md my-2 w-1/2"
            key={course.id}
          >
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </p>
        ))}
      </div>
      <div className="col-span-2 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
          {courses.map((course) => (
            <CourseDetails key={course.id} course={course}></CourseDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
