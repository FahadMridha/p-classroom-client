import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseMoreDetails = () => {
  const course = useLoaderData();
  return (
    <div>
      <h3>{course.name}</h3>
    </div>
  );
};

export default CourseMoreDetails;
