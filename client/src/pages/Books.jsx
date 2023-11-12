import { useContext, useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import { NavLink } from "react-router-dom";
import AuthContext from "../AuthContext";

import BookCard from "../components/BookCard";
import BookForm from "../components/BookForm";
import Navbar from "../components/Navbar";
import { addNewBook, updateBook, deleteBook, getAllBooks } from "../controllers/booksController";
 

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

    const formatStars = (rating) => {
        let ratingStars;  
        if(rating === ""){ 
            rating = 1; 
        }
        return ratingStars = new Array(parseInt(rating)).fill('⭐').join("");
    }
  
    //once the user hits submit
    //adds the book to the book array in firebase, updates the booklist state and displays 
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
       
        handleDialog();
        
        form.rating = formatStars(form.rating);
        form.id = uuidv4(); 

        setBookList(prev => [...prev, form]); 

        addNewBook(authenticatedUser.uid, form, bookList); 
   
    }

    const handleUpdate = async (id, bookToUpdate) => { 
        
        try{ 
           
            bookToUpdate.rating = formatStars(bookToUpdate.rating); 
            console.log(bookToUpdate.rating)
            let index = bookList.findIndex((book) => book.id === id); 
            console.log(index)
            
            let updatedList = bookList.map((book, i) => { 
                if (i === index){ 
                    return bookToUpdate; 
                } else { 
                    return book; 
                }
            }); 
            
            console.log(updatedList); 
            updateBook(authenticatedUser.uid, updatedList); 
          
            setBookList(updatedList); 
            
        } catch(err) { 
            console.log(err); 
        }

    }


    const handleDelete = async (id) => { 

        let index = bookList.findIndex((book) => book.id === id )
        
        let bookToDelete = bookList[index]
    
        deleteBook(authenticatedUser.uid, bookToDelete)
        
        setBookList(prevState => {return prevState.filter(book => book.id !== id)}); 
    }

    //useEffect to sync with the firestore database and update the lists as the list is updated 
    useEffect(() => { 
            let ignore = false; 
            const getData = async() => { 
              
                const userSnap = await getAllBooks(authenticatedUser.uid); 

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
        
        <main className="bg-custom-lgt-brown">
        
            {authenticatedUser ? 
            <div>
                <header>
                    <h1 className="p-10 text-3xl font-bold text-center font-heading">Library</h1>
                </header>
        
                <section className="mx-10 relative">
                <button onClick={handleDialog}
                    className="bg-custom-mustard-yellow text-custom-dark-gray py-2 px-4 rounded-md my-6">{open ? 'Cancel' : 'Add book'}</button>
          

            <section className=" flex flex-col items-center gap-2 md:flex-row md:gap-2 md:flex-wrap">
                {bookList.length === 0 ? 
                    <p>You have no books to display. Click Add book to add a new book to your collection</p>
                    : bookList.map(book => 
                        <div key={book.id} className="flex flex-col justify-between border-2 
                        rounded-lg w-3/4 md:w-1/3 lg:w-1/4 py-8 px-6
                        border-transparent bg-custom-dark-brown  text-white">
                            <BookCard book={book} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                        </div>
                )}

            </section>
                    
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