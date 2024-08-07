import React from 'react'
import Navbar from './NavBar'
import Searchbar from './SearchBar'
import '../Main/MainContent.css'
import MainContainer from '../Main/Container-1/MainContainer1'

function Searchitems() {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <div className="outer-container">
                <div className="container">
                    {/* <h2 className="text-left  text-2xl">
                        <b>Popular Cuisines</b>
                    </h2> */}
                    <MainContainer/>
                </div>
            </div>
        </div>
    )
}

export default Searchitems
