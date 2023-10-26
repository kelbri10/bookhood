import {FiTrash2, FiEdit} from "react-icons/fi";
import { Link } from "react-router-dom";

const BookCard = ({book, handleDelete}) => { 

    const {id, title, author, rating, startDate, endDate} = book; 


    return(
        
        <article key={id} className="flex flex-col justify-between border-2 
        rounded-lg w-3/4 md:w-1/3 lg:w-1/4 h-80 py-8 px-6
        border-transparent bg-custom-dark-brown  text-white"> 
            <div>
                <p>{title}</p>
                <p>{author}</p>
                <p>{rating}</p> 
            </div>

            {!startDate || !endDate ? <div>Click edit to add start and completed date</div>: 
             <div>
             <p>Start Date: {startDate}</p>
             <p>Completed: {endDate}</p>
         </div>}
            
            
            <div className="flex flex-row justify-between">
                {/* for the delete button need to get the books id number */}
                <button onClick={() => handleDelete(id)}><FiTrash2/></button>
                <Link to={`/edit-book/${id}`}><FiEdit /></Link>
            </div>
        </article>
    )
}

export default BookCard; 