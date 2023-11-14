import "../pages/Fonts.css"

const AccountForm = ({formHeading, email, password, invalidPassword, handleEmail, handlePassword, handleSubmit}) => { 

    return(
        <div className=" h-screen flex flex-col justify-center items-center">
            
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

                    
                </form>
            </section>
            
        </div>
        
        
    )
}

export default AccountForm; 