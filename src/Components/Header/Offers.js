import React from 'react'
import Navbar from './NavBar'
import '../Main/MainContent.css'
import OffersPage from '../Main/Container-3/Main'
import Footer from '../Footer/Footer';
// import BckButton from '../Accounts/BackButton'
import BackButton from '../Accounts/BackButton';
function Offers() {
    return (
        <div>
            <Navbar />
            <div className="outer-container">
                <div className="container">
               
                <p><a href='/' className=''>Home</a>/Offers</p>
                <BackButton/>
                <div className='mt-10'>
                    
                <OffersPage/>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Offers
