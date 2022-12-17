import React from "react";
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { data } from "autoprefixer";

const Search = ()=>{
    return(
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <div>
                    <h2 className="uppercase">Luxury included vacations for tow people</h2>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti magni, delectus quidem similique cumque, adipisci vitae sunt nemo, eligendi mollitia inventore dicta. Quis ratione quaerat alias vel molestiae totam enim suscipit ea excepturi id.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 py-4">
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button>
                            <RiCustomerService2Fill size={50}/>
                        </button>
                        <div>
                            <h3 className="uppercase py-2">Leading Service</h3>
                            <p className="py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, autem.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button>
                            <MdOutlineTravelExplore size={50}/>
                        </button>
                        <div>
                            <h3 className="uppercase py-2">Leading Service</h3>
                            <p className="py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, autem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="border text-center">
                    <p className="uppercase pt-2">Get an additional 10% off</p>
                    <p className="uppercase py-4">12 hourse left</p>
                    <p className="uppercase bg-gray-800 text-gray-200 py-2">Book now and safe</p>
                </div>
                <form className="w-full">
                    <div className="flex flex-col my-2">
                        <label>Destination</label>
                        <select className="border rounded-md p-2">
                            <option>Grand Antigua</option>
                            <option>Key West</option>
                            <option>Maldives</option>
                            <option>Cozumel</option>
                        </select>
                    </div>
                    <div className="flex flex-col my-4">
                        <label>Check-In</label>
                        <input className="border rounded-md p-2" type='date'/>
                    </div>
                    <div className="flex flex-col my-2">
                        <label>Check-Out</label>
                        <input className="border rounded-md p-2" type='date'/>
                    </div>
                    <button className="w-full my-4">Rates & Availabilities</button>
                </form>
            </div>
        </div>
    )
}

export default Search;