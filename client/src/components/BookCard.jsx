import {FiTrash2, FiEdit} from "react-icons/fi";
import BookInfo from "./BookInfo";
import EditForm from "./EditForm";
import { useState } from "react";

const BookCard = ({book, handleDelete, handleUpdate}) => { 
    const [edit, setEdit] = useState(false); 

    const handleEdit = () => { 
        setEdit(prevState => !prevState); 
    }

    return(
        <div className="flex flex-col justify-between border-2 
        rounded-lg w-3/4 md:w-1/3 lg:w-1/4 py-8 px-6
        border-transparent bg-custom-dark-brown  text-white">
              {edit ? <div>
                <EditForm book={book} handleUpdate={handleUpdate} handleEdit={handleEdit}/>
                </div> : 
              <div className="flex flex-col justify-between">
                <BookInfo book={book}/>
                <div className="flex flex-row justify-between">
                    <button onClick={() => handleDelete(book.id)}><FiTrash2/></button>
                    <button onClick={handleEdit}><FiEdit /></button>
                </div>
            </div>}

            
        </div>
        
    )
}

export default BookCard; 