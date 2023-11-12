import { AiOutlineMail } from "react-icons/ai"; 
import { RiLockPasswordLine } from "react-icons/ri"; 
import { Link } from "react-router-dom";
import "../pages/Fonts.css"

const AccountForm = ({formHeading, email, password, invalidPassword, handleEmail, handlePassword, handleSubmit}) => { 

    return(
        <div className="bg-custom-lgt-brown h-screen flex flex-col justify-center items-center">
            
            <h1 className="text-3xl mb-8 text-center text-custom-green heading">{formHeading}</h1>
            <section className="body flex flex-col">
            
                <form className=" grid place-content-center"
                onSubmit={handleSubmit}>
                
                    <div className="flex flex-col gap-2 mb-4">
                        <label
                        htmlFor="email">
                            Email 
                        </label>
                        <input className="border-2 border-custom-green p-2 rounded-md"
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmail}
                            required/>
                        
                    </div>
                    

                    <div className="flex flex-col gap-2">
                        <label 
                        htmlFor="password">
                            Password 
                        </label>
                        <input className="border-2 border-custom-green p-2 rounded-md"
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePassword} 
                        required/>
                        
                    </div>
                    
                    <div className="text-rose-700">
                    {invalidPassword !== '' ? <p>{invalidPassword}</p> : null}
                    </div>
                    <button className="mx-auto mt-4 mb-8 py-4 bg-custom-green text-white w-full md:w-3/4 rounded-md"
                    type="submit">enter</button>

                    <p className="text-custom-dark-green">Don't have an account? <Link className="underline" to="/sign-up">Sign up here!</Link></p>
                </form>
            </section>
            
        </div>
        
        
    )
}

export default AccountForm; 