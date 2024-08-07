import React, { useEffect, useState } from 'react'
import Cards from './Cards'


let data = [
    {
        id: 1,
        img_title: "SubWay",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/36c15da5-700d-46e0-95dd-1414acb77a96_9296.JPG",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 2,
        img_title: "Burger King",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 3,
        img_title: "Pizza",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d20fdc8c86aa8bd0638f47dd013d46f9",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 4,
        img_title: "Barbeque Nation",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ffe4084febdec52732dffd3624f4e6c1",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 5,
        img_title: "Niloufer Classic",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1171b83d63d7c203e5f1c3e16980cd89",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 6,
        img_title: "The Good Bowl",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e04be27387483a7c00444f8e8241108",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 7,
        img_title: "Shah Ghouse Hotel",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ks4d93rjtcbitkzkbqx0",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 8,
        img_title: "Daily Kitchen",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750389.JPG",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 9,
        img_title: "Lucky Resturant",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qems028i3da5rxf81rbp",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    },
    {
        id: 10,
        img_title: "McDonald's",
        img_url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b10564e0-29ed-4c04-bd9a-541289ba74bb_23734.jpg",
        food_items:[
            {
                id:1,
                item_Name:"Veg Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f",
                item_discription:'Our Signature Whopper with Crunchy Veg Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 285 Gms| Kcal: 681.2 | Carbs 97.1 Gms| Sugar: 23.1 Gms| Fat: 25.4 Gms| Saturated fat: 9.8 Gms| Protein: 15.8 Gms| Sodium: 987.8 Mg Contains: Gluten, Soybean, Milk, Sesame seeds',
            },
            {
                id:2,
                item_Name:"Chicken Whopper",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/2ece2c5f21d615e1bb12163a495bbcbc",
                item_discription:'Our Signature Whopper with Flame Grilled Chicken Patty, Onions, Lettuce, Tomatoes (Seasonal), Gherkins, Creamy And Smoky Sauces With Xxl Buns. Qty: 280 Gms| Kcal: 667.2 | Carbs 59.1 Gms| Sugar: 8.7 Gms| Fat: 36.3 Gms| Saturated fat: 8.1 Gms| Protein: 26.2 Gms| Sodium: 1018.7 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:3,
                item_Name:"Crispy Veg Burger",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds', 
            },
            {
                id:4,
                item_Name:"4 Crispy Veg + 2 Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:5,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:6,
                item_Name:"Medium Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:7,
                item_Name:"Large Fries",
                item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/14/fefae94a-53cd-421c-9f1f-d0f642949728_2ddc8be1-0a65-430d-9de8-542fae4ce739.jpg",
                item_discription:'4 Crispy Veg + 2 Medium Fries Qty: 728 Gms| Kcal: 2101.2 | Carbs 1068.1 Gms| Sugar: 29.9 Gms| Fat: 89.2 Gms| Saturated fat: 32.7 Gms| Protein: 57.6 Gms| Sodium: 3427.2 Mg Contains: Gluten, Soybean , Milk , Sesame seeds', 
            },
            {
                id:8,
                item_Name:"Coca Cola Medium",
                 item_price:399,
                item_img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/4/c9494d62-a7f7-4976-9d1f-df89dd26b183_6853c1b4-f67d-42ba-a02e-076d9bfbc5a4.jpg",
                item_discription:'Cola. Kcal: 190.1 | Carbs 52 Gms| Sugar: 52 Gms| Fat: 0 Gms| Saturated fat: 0 Gms| Protein: 0 Gms| Sodium: 38', 
            }
        ],
        discount: "20% OFF UPTO ₹50"
    }
]


function Main() {
    const [resdata, setData] = useState([])
    const [error, setError] = useState(false)
    const [getId,setId]=useState('')


    const getData = () => {
        try {
            const respsonse = [...data]
            // console.log("the data function is here")
            // console.log(respsonse)
            setData(respsonse)
            setError(false)
        } catch (error) {
            setError(true)
            console.log("there is a error in the code", error)
        }
        finally {
            return;
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const handleButtonid = (id) => {
        setId(id)
    }



    console.log(getId)
    return (
        <div>
            <div className="text-left  text-2xl">
                <b>Restaurants with online food delivery in Hyderabad</b>
            </div>
            <Cards resdata={resdata} error={error} onClick={handleButtonid}/>
            

        </div>
    )
}

export default Main
