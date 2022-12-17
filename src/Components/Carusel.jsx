import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const SliderData = [
    {
        url: 'https://cdn.wallpapersafari.com/86/92/QcStdL.jpg'
    },
    
    {
        url: 'https://cdn.wallpapersafari.com/44/47/aeV4q5.jpg'
    },

    {
        url: 'https://wallpaperaccess.com/full/1098480.jpg'
    }
]

const Carusel = ()=>{
    const [Slide, SetSlide] = useState(0)
    const length = SliderData.length
    // console.log(length)

    const prevSlider = ()=>{
        SetSlide(Slide === length - 1 ? 0 : Slide + 1);
    }
    const nextSlider = ()=>{
        SetSlide(Slide === 0 ? length - 1 : Slide - 1);
    }

    return(
        <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
            <BsArrowLeftSquareFill onClick={prevSlider} className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"/>
            <BsArrowRightSquareFill onClick={nextSlider} className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"/>
            {SliderData.map((item, index)=>(
                <div className={index === Slide ? 'opacity-100' : 'opacity-0'}>
                    {index === Slide && (<img className="w-full rounded-md" src={item.url} alt='/' />)}
                </div>
            ))}
        </div>
    )
}

export default Carusel;