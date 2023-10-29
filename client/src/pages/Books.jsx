import { useContext, useEffect, useState} from "react";
import BookDisplay from "../components/BookDisplay";
import { arrayRemove, doc, setDoc, getDoc, updateDoc} from "firebase/firestore"; 
import { db } from "../../utils/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import Navbar from "../components/Navbar";
import AuthContext from "../AuthContext";
import { v4 as uuidv4 } from 'uuid'; 

const Books = () => { 
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({id:'', title: '', author:'', rating: '', startDate:'', endDate:''})
    const [bookList, setBookList] = useState([]);
    const {authenticatedUser} = useContext(AuthContext); 

    //const navigate = useNavigate(); 
    const handleDialog = () => { 
      setOpen(prevState => !prevState); 
    }
  
    //handles input changes that the user puts in 
    const handleChange = (e) => { 
            setForm({ 
                ...form, 
                [e.target.id]: e.target.value
            }); 
    }
  
    //once the user hits submit
    //adds the book to the book array in firebase, updates the booklist state and displays 
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
       
        setOpen(prevState => !prevState)
        if(form.rating === ""){ 
            form.rating = 1; 
        }
        let ratingStars = new Array(parseInt(form.rating)).fill('⭐').join("");
        
        form.rating = ratingStars;
        form.id = uuidv4(); 
        setBookList(prev => [...prev, form]); 

        //setDoc/updateDoc/addDoc take doc references so when doing a reference must start with doc 
        //collection refers to the collection reference 
        const userRef = doc(db, "users", authenticatedUser.uid); 
        await updateDoc(userRef, {books:[...bookList, form]}); 
   
    }

  

    const handleUpdate = async (id, bookToUpdate) => { 
        
        try{ 
           
            if(bookToUpdate.rating === ""){ 
                bookToUpdate.rating = 1; 
            }
            bookToUpdate.rating = new Array(parseInt(bookToUpdate.rating)).fill('⭐').join(""); 

            let index = bookList.findIndex((book) => book.id === id); 

            let updatedList = bookList.map((book, i) => { 
                if (i === index){ 
                    return bookToUpdate; 
                } else { 
                    return book; 
                }
            }); 
            
            const bookRef = doc(db, "users", authenticatedUser.uid); 
            
            await setDoc(bookRef, {books: updatedList})
          
            
            
        } catch(err) { 
            console.log(err); 
        }

    }


    const handleDelete = async (id) => { 

        let index = bookList.findIndex((book) => book.id === id )
        
        let bookToDelete = bookList[index]
        const bookRef = doc(db, "users", authenticatedUser.uid); 
        
        //something to note is that each individual book is a Map data structure - simple key value pairings 
        //https://firebase.google.com/docs/reference/rules/rules.Map 
        await updateDoc(bookRef, { 
            books: arrayRemove(bookToDelete)
        }); 

        //set the booklist to new array without deleted book
        setBookList(prevState => {return prevState.filter(book => book.id !== id)}); 
    }

    //useEffect to sync with the firestore database and update the lists as the list is updated 
    useEffect(() => { 
            let ignore = false; 
            const getData = async() => { 
                const userRef = doc(db, "users", authenticatedUser.uid); 
                const userSnap = await getDoc(userRef);
                
                if(userSnap.exists()) { 
                    if(!ignore){ 
                        console.log(userSnap.data())
                        let booksData = userSnap.data().books; 
                        setBookList([...booksData])
                    }
                } 
            }
            getData(); 
       
            return () => { 
                ignore = true; 
            }; 
    },[authenticatedUser])
  
    return( 
        
        <main>
        
            {authenticatedUser ? 
            <div>
                <header>
                    <Navbar />
                    <h1 className="p-10 text-3xl font-bold text-center">Happy Reading, User!</h1>
                </header>
        
                <section className="mx-10 relative">
                <button onClick={handleDialog}
                    className="bg-custom-mustard-yellow text-custom-dark-gray py-2 px-4 rounded-md my-6">{open ? 'Cancel' : 'Add book'}</button>
                    <BookDisplay 
                        bookList={bookList} 
                        handleDelete={handleDelete} 
                        handleUpdate={handleUpdate} 
                        handleChange={handleChange}/>
                    
                </section>

                <dialog className="border-2 border-custom-dark-gray bg-white text-custom-dark-gray rounded-md p-6 absolute top-1/4 w-1/2 md:w-1/3 md:top-1/3" open={open}>
                    <BookForm 
                        form={form} 
                        handleSubmit={handleSubmit} 
                        handleChange={handleChange}/>
                </dialog> 

            </div> :  
            <div>
                <Navbar />

                <section className="flex flex-col justify-center items-center m-20">
                    <h1 className="text-3xl">Uh Oh!</h1>
                    <p className="text-xl">It looks like you haven't logged in yet!</p>
                    <p className="p-8">Click <NavLink to="/login" className="underline text-custom-md-brown font-bold">here</NavLink> to login</p> 
                </section>
            
            </div>
            }
            
         </main>
    )
   
}

export default Books; 