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
               <div className="flex justify-between bg-blue-950 md:bg-white text-white md:text-black px-4 md:px-20 py-7 flex-wrap md:border-b-2 ">
                    <h3>Name</h3>
                <button className="text-xl">
                <BsSearch/>
                </button>
              
                   <div className={`${isMenuOpen ? '' : 'hidden'} md:inline`}>
                         <ul className="flex flex-col absolute right-3 bg-white text-black py-3 px-5 md:p-0  gap-8 md:flex md:flex-row md:relative duration-700">
                              {navLinks.map(({link, path}) => 
                                  <Link to={path} key={path}>
                                   <li>{link}</li>
                                  </Link>
                              )}
                         </ul>
                    </div>
                   <button onClick={toggleMenu} className={`${isMenuOpen ? 'absolute md:relative right-6 md:right-0 top-11 md:top-0 text-black' : '' }`} >
                  { isMenuOpen ? <GiTireIronCross/> : <CiMenuFries />}
                   </button>
                 
                   
               </div>
          </nav>
         </header>
     );
};

export default Navbar;
