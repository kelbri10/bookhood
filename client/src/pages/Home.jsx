import Navbar from "../components/Navbar";
import bookLoverImg from "./images/undraw_book_lover_re_rwjy.svg"; 
import phoneMVPImg from "./images/phoneMVP.png"; 
import { NavLink } from "react-router-dom";
import "./Fonts.css"; 

const Home = () => { 
    return(
      <main className="flex flex-col justify-center items-center text-custom-green bg-custom-lgt-brown h-screen">
         <h1 className="heading mb-10">Bookhood</h1>

        <div className="flex body">
          <NavLink to="/sign-up" className="mr-6 px-4 py-2 border-2 border-custom-green rounded-lg">sign up</NavLink>
          <NavLink to="/login" className="px-4 py-2 bg-custom-green text-white rounded-lg">login</NavLink>
        </div>
      </main>
     
    )
}


export default Home; 