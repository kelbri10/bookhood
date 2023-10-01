import { AiOutlineMail } from "react-icons/ai"; 
import { RiLockPasswordLine } from "react-icons/ri"; 
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const AccountForm = ({formHeading, email, password, handleEmail, handlePassword, handleSubmit}) => { 

    return(
        <div>
            <Navbar />

            <section className="flex flex-col items-center h-screen justify-center">
                
                <form className=" grid place-content-center h-2/3 w-2/3 border-2 border-transparent px-4 rounded-md shadow-lg "
                onSubmit={handleSubmit}>
                    <h1 className="text-3xl mb-4 text-center text-custom-dark-green ">{formHeading}</h1>
                
                    <div className="flex flex-col gap-2 mb-4">
                        <label className="flex flex-row items-center gap-2"
                        htmlFor="email">
                            Email <AiOutlineMail/>
                        </label>
                        <input className="border-2 border-custom-dark-green p-2 rounded-md"
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmail}
                            required/>
                    </div>
                    

                    <div className="flex flex-col gap-2">
                        <label className="flex flex-row items-center gap-2"
                        htmlFor="password">
                            Password <RiLockPasswordLine />
                        </label>
                        <input className="border-2 border-custom-dark-green p-2 rounded-md"
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePassword} 
                        required/>
                    </div>
                    

                    <button className="mx-auto my-8 py-2 bg-custom-dark-green text-white w-full md:w-3/4 rounded-md"
                    type="submit">Submit</button>

                    <p className="text-custom-dark-green">Don't have an account? <Link className="underline" to="/sign-up">Sign up here!</Link></p>
                </form>
            </section>
            
        </div>
        
        
    )
}

export default AccountForm; 