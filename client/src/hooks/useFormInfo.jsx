import { useState } from "react";

const useFormInfo = () =>{ 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleEmail = (e) => { 
        setEmail(e.target.value);
    }

    const handlePassword = (e) => { 
        setPassword(e.target.value); 
    }

    const handleReset = () => { 
        setEmail(''); 
        setPassword(''); 
    }

   return {email, password, handleEmail, handlePassword, handleReset}; 
}

export default useFormInfo; 