import { auth } from "../../utils/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import useFormInfo from "../hooks/useFormInfo";
import AccountForm from "./AccountForm";

import AuthContext  from "../AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => { 
    const {email, password, handleEmail, handlePassword, handleReset} = useFormInfo(); 
    const {authenticatedUser} = useContext(AuthContext); 
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false); 

    //test login information test@gmail.com password: testpassword
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
       try{  
            setLoading(true);
            let userCredential = await signInWithEmailAndPassword(auth, email, password); 
            handleReset(); 
            setLoading(false); 
        //     setTimeout(() => { 
        //    , 5000); 

        } catch(error){ 
            const errorCode = error.code; 
            const errorMessage = error.message; 
            console.log(errorCode, errorMessage); 
        }
    }

    useEffect(() => { 
        let ignore = false; 
        if(authenticatedUser){ 
            if(!ignore){ 
                return navigate("/library"); 
            }
        }

        return () => { 
            ignore = true; 
        }
    }, [authenticatedUser])

    

    return ( 
      
        <div className="bg-custom-lgt-brown h-screen">

            {/* NEED TO FIGURE OUT HOW TO SET LOADING */}
            {loading ? 
            <div className="flex justify-center items-center h-screen">
            <p className="text-5xl heading">Successful login! Redirecting...</p>
            </div> : 
            <AccountForm formHeading={'welcome back'}
            email={email} 
            password={password} 
            handleEmail={handleEmail} 
            handlePassword={handlePassword} 
            handleSubmit={handleSubmit}/>  }    

        </div>
    
    )
}



export default Login; 