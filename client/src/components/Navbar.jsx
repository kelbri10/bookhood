import { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiBooks } from "react-icons/pi"; 
import { FiSettings } from "react-icons/fi"; 
import { NavLink } from "react-router-dom"; 
import AuthContext from "../AuthContext";

const Navbar = ()  => { 
    const {authenticatedUser, handleSignOut} = useContext(AuthContext); 

    return( 
        <>
            <nav className="MOBILE-NAV flex flex-row justify-between p-4 md:hidden">
                <div className="HAMBURGER-MENU">
                    <span className="mb-2 block h-1 w-4 bg-custom-dark-green"></span>
                    <span className="mb-2 block h-1 w-6 bg-custom-dark-green"></span>
                    <span className="mb-2 block h-1 w-8 bg-custom-dark-green"></span>
                </div>
                <p><span className="font-bold text-lg text-custom-dark-green">Book</span>hood</p>
            </nav>

            <nav className="hidden md:visible md:w-full md:flex md:flex-row md:justify-between md:gap-4 md:list-none md:p-8 md:bg-custom-dark-green md:text-white ">
                <div>
                    <p className="w-1/2"><span className="font-bold">Book</span>hood</p>
                </div>

                <section className="flex flex-row justify-evenly gap-4">
                    <div className="flex flex-row items-center gap-1">
                        <AiOutlineHome />
                        <li className="group">
                            <NavLink to="/">Home</NavLink>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom-md-green"></span>
                        </li>
                        
                    </div>
                
                    <div className="flex flex-row items-center gap-1">
                        <PiBooks />
                        <li className="group">
                            <NavLink to="/library">Library</NavLink>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom-md-green"></span>
                        </li>
                    </div>

                    <div className="flex flex-row items-center gap-1">
                        <FiSettings />
                        <li className="group">
                            <NavLink to="">Settings</NavLink>
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom-md-green"></span>
                        </li>
                    </div>

                    <div className="flex flex-row justify-self-start">
                        <li className="group">
                            {authenticatedUser ? <button onClick={handleSignOut}>Sign Out</button> : 
                            <NavLink to="/login">Sign In</NavLink>}
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom-md-green"></span>
                        </li>
                    </div>

                    
                </section>
             
            </nav>
        </>
       
    
        
    )
}

export default Navbar; 