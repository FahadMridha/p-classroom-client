import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <div className="col-span-2 ml-0 borderd">
        {courses.map((course) => (
          <li>{course.category}</li>
        ))}
      </div>
    </div>
  );
};

export default Courses;
