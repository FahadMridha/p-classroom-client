import React from "react";

const Blog = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-xl border shadow-xl mt-10  p-6 mx-8 rounded-md  bg-slate-200 font-bold text-orange-700">
        Question Section
      </h2>
      <div className="bg-slate-300 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn1.What is the purpose of react router?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br /> React Router is
          a standard library for routing in React. It enables the navigation
          among views of various components in a React Application, allows
          changing the browser URL, and keeps the UI in sync with the URL.Let us
          create a simple application to React to understand how the React
          Router works. The application will contain three components: home
          component, about a component, and contact component. We will use React
          Router to navigate between these components.
        </p>
      </div>
      <div className=" bg-slate-300 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn2.How does context API works ?
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className=" bg-slate-300 p-4 shadow-xl rounded-lg text-lg mx-8 mt-5">
        <h1 className="test-2xl font-bold text-left">
          Qsn3.About useRef hook .
        </h1>
        <p>
          <span className="font-semibold">Answer:</span> <br />
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly. useRef
          returns a mutable ref object whose .current property is initialized to
          the passed argument ( initialValue ). The returned object will persist
          for the full lifetime of the component. Essentially, useRef is like a
          “box” that can hold a mutable value in its .current property. <br />
          useState returns 2 properties or an array. One is the value or state
          and the other is the function to update the state. In contrast, useRef
          returns only one value which is the actual data stored. When the
          reference value is changed, it is updated without the need to refresh
          or re-render.
        </p>
      </div>
    </div>
  );
};

export default Blog;
