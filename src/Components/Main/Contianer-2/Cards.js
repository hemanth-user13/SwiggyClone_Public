import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div 
            className={className} 
            style={{ ...style, display: 'block', position: 'absolute', top: '-55px', left: '1400px', zIndex: 1 }}
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
            style={{ ...style, display: 'block', position: 'absolute', top: '-55px', right: '16px', zIndex: 1 }}
            onClick={onClick}
        >
            <FaArrowRight style={{ color: 'black', fontSize: '30px' }} />
        </div>
    );
}

function Cards({ resdata }) {
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
        <div className="relative pt-14">
            <Slider {...settings}>
                {resdata.map((item, index) => (
                    <div key={index} className="px-2">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative mx-auto">
                            <a href="#">
                                <div className="relative">
                                    <img className="rounded-t-lg w-full" src={item.img_url} alt={item.img_title} />
                                    <div className="absolute top-0 right-0 bg-red-600 text-white text-sm font-bold py-1 px-2 rounded-bl-lg">
                                        {item.discount}
                                    </div>
                                </div>
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.img_title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Cards;
