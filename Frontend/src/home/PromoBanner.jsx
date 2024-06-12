import React from "react";
import promoImg from "../assets/promo-img.png";
import { Link } from "react-router-dom";
const PromoBanner = () => {
     return (
          <section>
               <div className="flex px-24 bg-gray-100 py-5">
                    <div className="w-3/5 flex flex-col space-y-4">
                         <h2 className="text-6xl w-3/4 font-bold mb-5 leading-snug">
                             Sale 20% Off <br></br><span className="text-blue-700"> On Everything!!</span>
                         </h2>
                         <p className="text-lg">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eligendi totam placeat
                              tempore esse tenetur ut explicabo in cupiditate, recusandae sit. Eius odit architecto quisquam
                              placeat, aut quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum saepe non eligendi neque consequatur harum, reiciendis quod sequi numquam.
                         </p>
                         <Link to="/about">
                              <button className="border mt-8 bg-blue-700 py-3 px-10 rounded-md text-white transition-all duration-500 hover:custom-ease-class hover:bg-transparent hover:text-black hover:border hover:border-blue-700">
                                   About US
                              </button>
                         </Link>
                    </div>

                    <div className="w-[750px]">
                         <img src={promoImg} className="w-full object-cover"/>
                    </div>
               </div>
          </section>
     );
};

export default PromoBanner;
