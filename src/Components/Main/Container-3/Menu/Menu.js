import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../../../Header/NavBar";
import MenuCard from './MenuCard'
import '../../MainContent.css';
import Search from '../../../Header/SearchBar'
import SearchBar from "../../../Header/SearchBar";
import Footer from '../../../Footer/Footer'


function Menu() {
  // const[data,setData]=useState([]);
  // const[error,setError]=useState("");
  


  const { id } = useParams();
  const location = useLocation();
  const { img_title,img_url,food_items } = location.state || {};
  // console.log("the keys of the food items are ")
  // console.log(Object.keys(food_items))
  // console.log("the values of the object are",Object.values(food_items))

  const ResturantMenu=food_items;
  console.log("the data is",ResturantMenu)


  // const resturantData=Object.entries(...food_items) || {};
  // console.log("the resturant data is",resturantData)

  // console.log("the first data from the sample is",resturantData.slice())

  // const [img_url] =location.state || {};

  const count=ResturantMenu.length

  return (
    <div>
      <Navbar />
     {/* <h1>Hi, this is a menu section</h1>
      <p>Selected Item ID: {id}</p>
      <p>Selected Item Title: {img_title}</p>
      <p>the selected resturant image is {img_url}</ p> */}
      <div className="outer-container">
      <div className="container">
      <h4 className="text-center text-4xl">Today's Menu</h4>
      <SearchBar/>
      <p className="text-2xl"><strong>Recommended <b style={{color:"red"}}>{count}</b> Items</strong></p>
      {ResturantMenu.map((item,index)=>(
        <div key={index}>
          <MenuCard item={item}/>
        </div>
      ))}
      
      </div>
      </div>
   
      {/* <p>the selected resturant image is {food_items}</p> */}

      {/* <p>Selected food items are {food_items}</p> */}
      {/* {ResturantMenu.map((item,index)=>(
        <div key={index}>
          <MenuCard item={item}/>
        </div>
      ))} */}
<Footer/>
    </div>
  );
}

export default Menu;
