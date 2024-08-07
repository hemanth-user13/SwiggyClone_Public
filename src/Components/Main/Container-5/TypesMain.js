import React, { useEffect, useState } from 'react'
import TypeCard from '../Container-4/Cities'


let data=[
    {
        id:1,
        title:"Chinese Restaurant Near Me"
    },
    {
        id:2,
        title:"South Indian Restaurant Near Me"
    },
    {
        id:3,
        title:"Indian Restaurant Near Me"
    },
    {
        id:4,
        title:"Kerala Restaurant Near Me"
    },
    {
        id:5,
        title:"Korean Restaurant Near Me"
    },
    {
        id:6,
        title:"North Indian Restaurant Near Me"
    },
    {
        id:7,
        title:"Seafood Restaurant Near Me"
    },
    {
        id:8,
        title:"Bengali Restaurant Near Me"
    },
    {
        id:9,
        title:"Punjabi Restaurant Near Me"
    },
    {
        id:10,
        title:"Italian Restaurant Near Me"
    },
    {
        id:11,
        title:"Andhra Restaurant Near Me"
    }
]
function TypeMain() {
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
           <TypeCard resdata={resdata} error={error}/>

        </div>
    </div>
  )
}

export default TypeMain
