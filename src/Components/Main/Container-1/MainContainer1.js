import React, { useEffect, useState } from 'react'
import Items from './Items'
let data = [
    {
        id: 1,
        item_name: "idle",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
        title: "Idli",

    },
    {
        id: 2,
        item_name: "Dosa",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
        title: "Dosa",
    },
    {
        id: 3,
        item_name: "Poori",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png",
        title: "Poori",
    },
   
    {
        id: 5,
        item_name: "paratha",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Vada.png",
        title: "paratha"
    },
    {
        id: 6,
        item_name: "cakes",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
        title: "Cakes"

    },
    {
        id: 7,
        item_name: "pancakes",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
        title: "pancakes"
    },
    {
        id: 8,
        item_name: "omelette",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Omelette.png",
        title: "omelette"
    },
    {
        id: 9,
        item_name: "shake",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
        title: "shake"
    },
    {
        id: 10,
        item_name: "Biryani",
        item_img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
        title: "Biryani"
    }
]
function MainContainer1() {
    const [itemdata, setItemData] = useState([]);
    const [error, setError] = useState('');
    const getData = () => {
        try {
            const response = [...data];
            // console.log(response);
            setItemData(response)
        } catch (error) {
            console.log("there is an error in the code",error)

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
             <h2 className="text-left  text-2xl">
             <b>What's on your mind?</b>
             </h2>
            <Items itemdata={itemdata}/>

        </div>
    )
}

export default MainContainer1
