import { NavLink } from "react-router-dom";
import "./Fonts.css"; 

const Home = () => { 
    return(
      <main className="flex flex-col justify-center items-center text-custom-green bg-custom-lgt-brown h-screen">
       
        <h1 className="heading">Bookhood</h1>
          
        <p className="body mb-10 px-10">Book Tracking has never been easier. Whether you're a new member or an old friend, Bookhood allows you to easily track your in-progress and completed books.</p>
        <div className="flex body">
          <NavLink to="/sign-up" className="mr-6 px-4 py-2 border-2 border-custom-green rounded-lg">sign up</NavLink>
          <NavLink to="/login" className="px-4 py-2 bg-custom-green text-white rounded-lg">login</NavLink>
        </div>
      </main>
     
    )
}


export default Home; 