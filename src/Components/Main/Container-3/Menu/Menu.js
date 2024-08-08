import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../../../Header/NavBar";

function Menu() {
  const { id } = useParams();
  const location = useLocation();
  const { img_title } = location.state || {};
  // const { food_items } = location.state || {};

  return (
    <div>
      <Navbar />
      <h1>Hi, this is a menu section</h1>
      <p>Selected Item ID: {id}</p>
      <p>Selected Item Title: {img_title}</p>
      {/* <p>Selected food items are {food_items}</p> */}
    </div>
  );
}

export default Menu;
