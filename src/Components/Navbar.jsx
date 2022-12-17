import React, { useState } from "react";
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaPinterest } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navbar = ()=>{
    const [Nav,SetNav] = useState(false)
    const [Logo,SetLogo] = useState(false)
    const handleNav = ()=>{
        SetNav(!Nav)
        SetLogo(!Logo)
    }

    return(
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
            <div>
                <h1 onClick={handleNav} className={Logo ? 'hidden' : 'block uppercase'}>Beaches.</h1>
            </div>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className="hidden md:flex">
                <BiSearch className="mr-2" size={20}/>
                <BsPerson size={20}/>
            </div>

            {/* Hamburger */}
            <div onClick={ handleNav } className="md:hidden z-10">
                {Nav ? <AiOutlineClose className="text-black" size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
            </div>

            {/* Mobile Menu Dropdown */}
            <div onClick={handleNav} className={Nav ? "absolute left-0 top-0 w-full bg-gray-100/90 text-black px-4 py-7 flex flex-cols" : "absolute left-[-100%]"}>
                <ul className="w-full">
                    <h1 className="uppercase">Beaches.</h1>
                    <li className="border-b">Home</li>
                    <li className="border-b">Destination</li>
                    <li className="border-b">Travel</li>
                    <li className="border-b">View</li>
                    <li className="border-b">Book</li>
                    <div className="flex flex-col">
                        <button className="my-6">Search</button>
                        <button>Account</button>
                    </div>
                    <div className="flex justify-between my-6">
                        <FaFacebook className="icon"/>
                        <FaPinterest className="icon"/>
                        <FaTwitter className="icon"/>
                        <FaYoutube className="icon"/>
                        <FaInstagram className="icon"/>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;