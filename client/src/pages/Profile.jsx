const CustomizeProfile = () => { 
    //documentation for updating user profile 
    //https://firebase.google.com/docs/auth/web/manage-users
    const {authenticatedUser} = useContext(AuthContext);
    const [userProfile, setUserProfile] = useState({displayName: authenticatedUser.displayName, email: authenticatedUser.email, photoURL: authenticatedUser.photoURL})

    const handleSubmit = (e) => { 
        e.preventDefault(); 

        

    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">
                Display Name
                <input type="text"
                value={userProfile.displayName}
                name="displayName"
                id="displayName"
                onChange={() => setUserProfile({displayName: displayName, ...userProfile})} />
            </label>

            <label htmlFor="photoURL">
                <input type="file"
                value={userProfile.photoURL}
                name="photoURL"
                id="photoURL"
                onChange={() => setUserProfile({...userProfile, photoURL: photoURL})}/>
            </label>


        </form>
    )
}

export default CustomizeProfile; 