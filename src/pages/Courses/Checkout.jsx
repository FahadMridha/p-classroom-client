import React, { useContext } from "react";

import { AuthContext } from "../../auth/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  // const { course } = useLoaderData();
  // const { name, price, language, id, author } = course;
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
      <div></div>
    </>
  );
};

export default Checkout;
