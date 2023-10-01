import { db, auth } from "../../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import useFormInfo from "../hooks/useFormInfo"; 
import AccountForm from "./AccountForm";
import bookImg from "../pages/images/undraw_book_reading_re_fu2c.svg"
//add redirect to the main page
//how to make sure what the user does under account is connected to the books they save in the database
//i think the database logic is when user does anything under their account, their uuid is saved under a collection of users, that uuid is used to identify their books
//when the user.uuid matches the uuid found in the user collection then it will display that users books to them otherwise it won't
//make login and create account pages prettier
const CreateAccount = () => { 
    const {email, password, handleEmail, handlePassword, handleReset} = useFormInfo(); 

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        console.log(email); 
        console.log(password); 
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
    }

    
    return(
        <div className="">
            <AccountForm formHeading={'Create Account'}
            email={email} 
            password={password} 
            handleEmail={handleEmail} 
            handlePassword={handlePassword} 
            handleSubmit={handleSubmit}/>    
        </div>
     
        
    )
}

export default CreateAccount; 