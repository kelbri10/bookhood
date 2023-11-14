import { useContext} from "react";
import "../pages/Fonts.css"; 
import { NavLink } from "react-router-dom"; 
import AuthContext from "../AuthContext";

const Navbar = ()  => { 
    const {authenticatedUser, handleSignOut} = useContext(AuthContext); 
    
    //when the user clicks the hamburger menu, the lines shift to an x and dropdown menu appears with Home, Library, Settings, and Login 
    //need to track whether the nav menu is open or not and if it is open toggle visibility 
    //add transition for drop down so that it spans across the page 
    return( 
        <nav className="">

                <ul className="body text-lg flex flex-row justify-end p-10">
                    <li className="group">
                        {authenticatedUser ? <button onClick={handleSignOut}>Sign Out</button> : 
                        <NavLink to="/login">Sign In</NavLink>}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-custom-md-green"></span>
                    </li>
                </ul>
            
            
        </nav>
        
       
    
        
    )
}

export default Navbar; 