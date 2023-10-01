import { useState, createContext, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"; 



const AuthContext = createContext(); 

export const AuthProvider = ({children}) => { 
    const [authenticatedUser, setAuthenticatedUser] = useState(null); 

    const handleSignOut = async() =>{ 
        const auth= getAuth();
        try{  
            signOut(auth)
            console.log('user is signed out')
        } catch (error){ 
            console.log(error)
        }
    }

    //checks to see if there is a user logged in
    //TODO: redirect user to the books dashboard with profile information 
    useEffect(() => { 
        const auth = getAuth(); 
        const unsubscribe = onAuthStateChanged(auth, user => {
            setAuthenticatedUser(user)
            console.log(authenticatedUser)
        })
        return unsubscribe
    }, [authenticatedUser])

    const value = { 
        authenticatedUser, 
        handleSignOut
    }

    return( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext; 

