// import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function BookLayout() {
  return (
    <div>
      <Link to={"/books/1"}>Book 1</Link>
      <br />
      <Link to={"/books/2"}>Book 2</Link>
      <br />
      <Link to={"/books/new"}>New Book</Link>
      {/* You can also pass context in outlet just like useContext and that
      value is shared among all the childs */}
      <Outlet/>   
    </div>
  );
}
