import Navbar from "../components/Navbar";
import bookLoverImg from "./images/undraw_book_lover_re_rwjy.svg"; 
import phoneMVPImg from "./images/phoneMVP.png"; 
import { NavLink } from "react-router-dom";

const Home = () => { 
    return(
      <main className="grid w-full grid-cols-1">
          <header>
              <Navbar/>
          </header>

          <section className="HERO text-custom-dark-green px-4 my-10 flex h-screen flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">Bookhood</h1>
              <h2 className="SUBHEADER text-2xl p-6">A cozy book app to curl up with</h2>

              
              <img className="my-10"src={bookLoverImg} alt="" />
             
              
              <a href="#" className="bg-custom-dark-brown text-white py-3 px-8 rounded-xl transition-all ease-in-out delay-100 hover:scale-110 hover:bg-custom-md-green hover:text-custom-dark-brown  hover:drop-shadow-2xl hover:font-bold">Sign up</a>
          </section>

          {/* <span class="block h-0.5 w-full bg-slate-950"></span> */}

          <section className="FEATURES">
              <article className="bg-custom-dark-green text-custom-md-green py-20 flex flex-col items-center">
                <h2 className="HOW-IT-WORKS text-4xl md:text-6xl font-bold py-10">How It Works</h2>
                <p className="text-2xl text-center m-4 md:text-3xl">Personalized reading lists. Anywhere. At the tap of your finger.</p>
                <img className="py-10" src={phoneMVPImg} alt="" />
              </article>

              <div className="grid grid-cols-1 md:grid-cols-3">
                <article className="SIGN-UP flex h-96 flex-col items-center justify-center ">
                  <h2 className="text-3xl">Sign Up</h2>
                  <p className="m-6">Create an account to start curating book lists to your heart's content.</p>
                </article>

                <article className="CREATE-PROFILE bg-custom-dark-green text-custom-lgt-brown flex h-96 flex-col items-center justify-center ">
                  <h2 className="text-3xl">Create your profile</h2>
                  <p className="m-6">Customize your profile and your preferences. We want this to be YOUR space!</p>
                </article>

                <article className="CURATE-DASH bg-custom-md-green flex h-96 flex-col items-center justify-center">
                  <h2 className="text-3xl md:text-center">Curate your dashboard</h2>
                  <p className="m-6">Start adding unlimited reads to your feed, tag your favorites, and share with friends!</p>
                </article>
              </div>
            
          </section>

          {/* <span className="block h-0.5 w-full md:w-full bg-slate-950"></span> */}

          <section className="CTA h-96 flex flex-col items-center justify-center">
              <h2 className="text-3xl p-8">Let's Curl Up Together</h2>

              <div className="LINKS flex flex-col">
                <NavLink to={"/sign-up"} className="bg-custom-dark-brown rounded-xl text-white py-4 px-8 mb-4 text-center transition-all ease-in-out delay-100 hover:scale-110 hover:bg-custom-md-green hover:text-custom-dark-brown  hover:drop-shadow-2xl hover:font-bold">Sign up for free</NavLink>
                <NavLink to={"/login"} className="bg-custom-dark-brown rounded-xl text-white p-4 px-8 text-center transition-all ease-in-out delay-100 hover:scale-110 hover:bg-custom-md-green hover:text-custom-dark-brown  hover:drop-shadow-2xl hover:font-bold">Login</NavLink>
              </div>
          </section>

          <footer>
            <p className="text-custom-md-green text-center">Copyright 2023</p>
          </footer>
        </main>
     
    )
}


export default Home; 