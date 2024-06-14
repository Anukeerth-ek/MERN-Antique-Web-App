import React, { useContext } from "react";
import { sideBar } from "../utils/Data";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const SideBar = () => {
 
     const {user} = useContext(AuthContext)

     return (
          <aside>
               <div>
                    <ul className="bg-gray-100 py-10 pr-12 pl-4">
                       <Link to="/">
                       <div className=" inline-flex mb-4">
                       <img src={user.photoUrl ? user.photoUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpI-jRCBsbJuzXvVYUsqWM9Mketi1KxQh9bzrDMM7pvSlqHuuseLokmX3b2IP-PP5u2c&usqp=CAU'} className="rounded-full w-12"/>
                       <h3 className=" text-base font-bold">Hi, {user.displayName}</h3>
                       </div>
                       </Link>
                         {sideBar.map((item, index) => {
                              return (
                                   <Link to={item.path} key={index}>
                                   <li  className={`flex mb-3 cursor-pointer hover:bg-white pl-2 pr-8 py-2 rounded-md ${item.marginBottom ? 'mb-4   ' : '' } ${item.marginTop ? ' mt-8' : ''}`}>
                                        <svg
                                             className="w-6 h-6 mr-3 text-gray-800 dark:text-gray-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 18 20"
                                        >
                                             <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                                        </svg>
                                        {item.title}
                                   </li>
                                   </Link>
                              );
                         })}
                         
                    </ul>
               </div>
          </aside>
     );
};

export default SideBar;
