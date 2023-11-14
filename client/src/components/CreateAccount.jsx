import { db, auth } from "../../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import useFormInfo from "../hooks/useFormInfo"; 
import AccountForm from "./AccountForm";
import { useState } from "react";


const CreateAccount = () => { 
    const {email, password, handleEmail, handlePassword, handleReset} = useFormInfo(); 
    const [invalidPassword, setInvalidPassword] = useState(''); 
    
    const handleSubmit = async (e) => { 
        e.preventDefault(); 

        if(password !== '' && password.length >= 6){ 
            setInvalidPassword('');
            try { 
                let userCredential = await createUserWithEmailAndPassword(auth, email, password); 
                const user = userCredential.user; 
                console.log(user); 
                //creates a new user document with the user id saved as key-value pair
                await setDoc(doc(db, "users", user.uid), {uid: user.uid, books:[]}); 
                //resets form 
                handleReset();
                
                
            } catch(error){ 
                const errorCode = error.code; 
                const errorMessage = error.message; 
                console.log(errorCode, errorMessage); 
            }
        } else { 
            setInvalidPassword('Password must be longer than 6 characters.')
        }
        
    }

    return(
        <div className="bg-custom-lgt-brown h-screen">
            <AccountForm formHeading={'create account'}
            email={email} 
            password={password} 
            handleEmail={handleEmail} 
            handlePassword={handlePassword} 
            handleSubmit={handleSubmit}
            invalidPassword={invalidPassword}
            />    
        </div>
     
        
    )
}

export default CreateAccount; 