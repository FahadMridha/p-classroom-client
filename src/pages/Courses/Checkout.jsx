import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { AuthContext } from "../../auth/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();
  const { name, picture, price, author, description, id, language } = course;
  console.log(id);
  return (
    <>
      <h1 className="text-3xl text-center mt-10 text-slate-500">
        Welcome to The Course
      </h1>
      <div className="flex justify-center gap-4 my-4  ">
        <p className="text-2xl text-slate-500">Name: {user?.displayName}</p>
        <img
          className="rounded-full"
          style={{ height: "30px" }}
          src={user?.photoURL}
          alt=""
        />
      </div>

      <div className="mx-auto ">
        <div className="border-2 p-4 w-9/12 text-center">
          <div className="text-slate-500">
            <h2>Course Title: {name}</h2>
            <p className="text-slate-500">Course Id: {id}</p>
            <h4>Version :{language}</h4>
            <p>Price: ${price}</p>
            <p> Author: {author}</p>
          </div>
          <div className="dropdown dropdown-top dropdown-end">
            <label tabIndex={0} className="btn m-1">
              Make Payment
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-slate-600 rounded-box w-52"
            >
              <li>
                <Link>With BKash</Link>
              </li>
              <li>
                <Link>With Bank</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
