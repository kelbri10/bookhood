import { useState } from "react";
import {FiTrash2, FiEdit} from "react-icons/fi";
import BookInfo from "./BookInfo";
import EditForm from "./EditForm";

const BookDisplay = ({bookList, handleDelete, handleUpdate}) => { 
    const [edit, setEdit] = useState(false); 

    const handleEdit = () => { 
       
        setEdit(prevState => !prevState); 
    }
   
    return(

        <section className=" flex flex-col items-center gap-2 md:flex-row md:gap-2 md:flex-wrap">
            {bookList.length === 0 ? 
                <p>You have no books to display. Click Add book to add a new book to your collection</p>
                : bookList.map(book => 
                    <div key={book.id} className="flex flex-col justify-between border-2 
                    rounded-lg w-3/4 md:w-1/3 lg:w-1/4 py-8 px-6
                    border-transparent bg-custom-dark-brown  text-white">
                        {edit ? 
                        <div className="flex flex-col justify-center items-center">
                            <EditForm book={book} handleUpdate={handleUpdate} handleEdit={handleEdit}/>
                            <button  className=" mt-3 text-white"
                            type="button" onClick={handleEdit}>Done</button>
                        </div> : 
                        <div className="flex flex-col justify-between">
                            <BookInfo book={book}/>
                            <div className="flex flex-row justify-between">
                                <button onClick={() => handleDelete(book.id)}><FiTrash2/></button>
                                <button onClick={handleEdit}><FiEdit /></button>
                            </div>
                        </div>}
                    </div>
            )}

        </section>
        
        
    )
}

export default BookDisplay; 