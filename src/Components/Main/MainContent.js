import React from "react";
import "./MainContent.css";
import Container1 from './Container-1/MainContainer1'
import Container2 from './Contianer-2/RestaurantChains'
import Container3 from './Container-3/Main'
import Container4 from './Container-4/CitiesMain'
import Container5 from './Container-5/TypesMain'

function MainContent() {
  return (
    <div className="outer-container">
      <div className="container">
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

export default MainContent;
