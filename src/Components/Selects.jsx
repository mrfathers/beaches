import React from "react";
import SelectsCards from "./SelectsCards";
import BoraBora from '../Assets/borabora.jpg';
import BoraBora2 from '../Assets/borabora2.jpeg';
import Maldives from '../Assets/maldives.jpeg';
import Maldives2 from '../Assets/maldives2.jpg';
import Maldives3 from '../Assets/maldives3.jpg'
import KeyWest from '../Assets/keywest.jpg';

const Selects = ()=>{
    return(
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectsCards bg={BoraBora} text='Bora Bora'/>
            <SelectsCards bg={BoraBora2} text='Maldives'/>
            <SelectsCards bg={Maldives} text='Antigua'/>
            <SelectsCards bg={Maldives2} text='Cozumel'/>
            <SelectsCards bg={Maldives3} text='Jamaica'/>
            <SelectsCards bg={KeyWest} text='Key West'/>
        </div>
    )
}

export default Selects;