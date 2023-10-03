import { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiBooks } from "react-icons/pi"; 
import { FiSettings } from "react-icons/fi"; 
import { NavLink } from "react-router-dom"; 
import AuthContext from "../AuthContext";

const Navbar = ()  => { 
    const {authenticatedUser, handleSignOut} = useContext(AuthContext); 
    const [isOpen, setIsOpen] = useState(false); 

    const handleNav = () => { 
        setIsOpen(!isOpen); 
    }
    //when the user clicks the hamburger menu, the lines shift to an x and dropdown menu appears with Home, Library, Settings, and Login 
    //need to track whether the nav menu is open or not and if it is open toggle visibility 
    //add transition for drop down so that it spans across the page 
    return( 
        <div className="">
            <nav className="MOBILE-NAV relative w-full flex flex-row justify-between md:hidden">
                <button className="HAMBURGER-MENU p-4 hover:cursor-pointer"
                onClick={handleNav}>
                        <span className="mb-2 block h-1 w-4 bg-custom-dark-green"></span>
                        <span className="mb-2 block h-1 w-6 bg-custom-dark-green"></span>
                        <span className="mb-2 block h-1 w-8 bg-custom-dark-green"></span>
                </button >

                { isOpen ? 
                    <div className="bg-custom-md-green absolute w-full z-40 animate-slideOut font-heading">
                        <button className="p-4" onClick={handleNav}>
                            <span className="mb-2 block h-1 w-8 bg-custom-dark-green rotate-45 translate-y-3"></span>
                            <span className="mb-2 block h-1 w-8 bg-custom-dark-green -rotate-45"></span>
                        </button>
                        <ul className="min-h-screen flex flex-col justify-center items-center gap-4 pb-4 text-4xl">
                            <NavLink to={"/"} onClick={handleNav}>Home</NavLink>
                            <NavLink to={"/library"} onClick={handleNav}>Library</NavLink>
                            <NavLink to={"/settings"} onClick={handleNav}>Settings</NavLink>
                            <NavLink to={"/login"} onClick={handleNav}>Sign In</NavLink>
                        </ul>
                    </div>: null}
                <p className="p-4 font-heading text-2xl"><span className="font-bold text-custom-dark-green">Book</span>hood</p>
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
        </div>
       
    
        
    )
}

export default Navbar; 