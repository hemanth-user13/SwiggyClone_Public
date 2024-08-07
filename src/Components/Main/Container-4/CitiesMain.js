import React, { useEffect, useState } from 'react'
import CityCard from './Cities'


let data=[
    {
        id:1,
        title:"Best Resturants in Hyderabad"
    },
    {
        id:2,
        title:"Best Resturants in Bangalore"
    },
    {
        id:3,
        title:"Best Resturants in Pune"
    },
    {
        id:4,
        title:"Best Resturants in Mumbai"
    },
    {
        id:5,
        title:"Best Resturants in Delhi"
    },
    {
        id:6,
        title:"Best Resturants in Kolkata"
    },
    {
        id:7,
        title:"Best Resturants in Chennai"
    },
    {
        id:8,
        title:"Best Resturants in jaipur"
    },
    {
        id:9,
        title:"Best Resturants in Nagpur"
    },
    {
        id:10,
        title:"Best Resturants in Ahmedabad"
    }
]
function CitiesMain() {
    const [resdata, setData] = useState([])
    const [error, setError] = useState(false)


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
  return (
    <div>
      <div>
            <div className="text-left  text-2xl">
                <b>Best Places to Eat Across Cities</b>
            </div>
           <CityCard resdata={resdata} error={error}/>

        </div>
    </div>
  )
}

export default CitiesMain
