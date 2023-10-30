import {FiTrash2, FiEdit} from "react-icons/fi";
import BookInfo from "./BookInfo";
import EditForm from "./EditForm";
import { useState} from "react";

const BookCard = ({ book, handleUpdate, handleDelete}) => { 
    const [edit, setEdit] = useState(false); 


    const handleEdit = () => { 
        setEdit(prevState =>  !prevState)
    }

    // useEffect(() => { 
    //     let ignore = false; 
    //     const getData = async() => { 
          
    //     }
    //     getData(); 
   
    //     return () => { 
    //         ignore = true; 
    //     }; 
    // },[edit])

    return(
        <div>
             {edit ? 
                <div className="flex flex-col justify-center items-center">
                    <EditForm book={book} handleUpdate={handleUpdate} handleEdit={handleEdit} />
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