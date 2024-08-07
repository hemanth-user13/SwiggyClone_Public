import React from 'react';
import Slider from 'react-slick';
import './Items.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div 
            className={className} 
            style={{ ...style, display: 'block', position: 'absolute', top: '10px', left: '1370px', zIndex: 1 }}
            onClick={onClick}
        >
            <FaArrowLeft style={{ color: 'black', fontSize: '30px' }} />
        </div>
    );
}

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div 
            className={className} 
            style={{ ...style, display: 'block', position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
            onClick={onClick}
        >
            <FaArrowRight style={{ color: 'black', fontSize: '30px' }} />
        </div>
    );
}

function Items({ itemdata }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container" style={{ position: 'relative' }}>
            <Slider {...settings}>
                {itemdata.map((item, index) => (
                    <div key={index} className="px-5">
                   <img className="rounded-full  w-36 h-44 mx-0.5 " src={item.item_img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Items;
