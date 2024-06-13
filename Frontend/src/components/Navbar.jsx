import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";
import { navLinks } from "../utils/Data";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
     //________ STATES __________
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isSticky, setIsSticky] = useState(false);

     // _____ToggleMenu____
     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     useEffect(() => {
          const handleScroll = () => {
               if (window.screenY > 100) {
                    setIsSticky(true);
               } else setIsSticky(false);
          };

          window.addEventListener("scroll", handleScroll);

          return window.addEventListener("scroll", handleScroll);
     }, []);

     return (
          <header>
               <nav>
                    <div className="flex justify-between items-center bg-blue-950 md:bg-white text-white md:text-black px-4 md:px-10 lg:px-15 py-4 flex-wrap md:border-b-2 ">
                         <h3>Name</h3>

                         <div className="flex justify-between items-center border-none outline-none md:border md:border-black w-0 md:w-96 lg:w-[680px] h-9 rounded-2xl">
                              <input
                                   className="hidden md:block pl-2 py-5 rounded-md w-0 h-0 md:w-full md:h-full text-lg border-2 border-gray-500"
                                   placeholder="Whats on your mind?..."
                              />
                              <BsSearch className=" relative right-6 text-lg " />
                         </div>

                         <BsSearch className=" relative right-6 text-lg md:hidden" />
                         <div className={`${isMenuOpen ? "" : "hidden"} lg:inline`}>
                              <ul className="flex flex-col absolute right-3 lg:right-0 top-6 md:text-md lg:top-0 bg-white text-black py-3 px-5 md:px-3 lg:p-0  gap-8 lg:flex lg:flex-row lg:relative duration-700">
                                   {navLinks.map(({ link, path }) => (
                                        <Link to={path} key={path}>
                                             <li>{link}</li>
                                        </Link>
                                   ))}
                              </ul>
                         </div>

                         <div className="border px-9 md:px-12 py-1 md:py-2 bg-white text-black  md:bg-blue-600 md:hover:bg-transparent cursor-pointer md:hover:border-blue-600 md:hover:bg-blue-700  md:text-white rounded-lg md:block">
                              <button className="transition-all duration-500 hover:custom-ease-class cursor-pointer ">
                                   Login
                              </button>
                         </div>

                         <div className="block md:block lg:hidden">
                              <button
                                   onClick={toggleMenu}
                                   className={`${
                                        isMenuOpen
                                             ? "absolute md:relative right-6 md:right-0 top-10 md:top-3 lg:top-0 text-black "
                                             : ""
                                   }`}
                              >
                                   {isMenuOpen ? <GiTireIronCross /> : <CiMenuFries />}
                              </button>
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Navbar;
