import { auth } from "../../utils/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import useFormInfo from "../hooks/useFormInfo";
import AccountForm from "./AccountForm";
import AuthContext  from "../AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => { 
    const {email, password, handleEmail, handlePassword, handleReset} = useFormInfo(); 
    const {authenticatedUser} = useContext(AuthContext); 
    const navigate = useNavigate()

    //test login information test@gmail.com password: testpassword
    const handleSubmit = async (e) => { 
        e.preventDefault(); 

        try{ 
            let userCredential = await signInWithEmailAndPassword(auth, email, password); 
            const user = userCredential.user; 
            // console.log(auth);  
            // console.log(user)
            handleReset(); 

            if(authenticatedUser){ 
                return navigate("/library")
            } else { 
                alert('Error: Please Try Again')
            }
            //redirects logged in user to books dashboard
            
        } catch(error){ 
            const errorCode = error.code; 
            const errorMessage = error.message; 
            console.log(errorCode, errorMessage); 
        }
    }

    

    return ( 
        <div className="">
            <AccountForm formHeading={'Welcome Back!'}
            email={email} 
            password={password} 
            handleEmail={handleEmail} 
            handlePassword={handlePassword} 
            handleSubmit={handleSubmit}/>     

            
        </div>
    
    )
}



export default Login; 