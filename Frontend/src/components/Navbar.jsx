import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { navLinks } from "../utils/Data";
import { Link } from "react-router-dom";

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
               <div className="flex justify-between px-20 py-7 flex-wrap border-b-2 ">
                    <h3>Name</h3>
                    <div>
                         <ul className="flex gap-8">
                              {navLinks.map(({link, path}) => 
                                  <Link to={path}>
                                   <li>{link}</li>
                                  </Link>
                              )}
                         </ul>
                    </div>
                    <CiMenuFries />
               </div>
          </nav>
         </header>
     );
};

export default Navbar;
