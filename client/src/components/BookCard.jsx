import {FiTrash2, FiEdit} from "react-icons/fi";

const BookCard = ({title, author, rating}) => { 
    return(
        <article id={title} className="flex flex-col justify-between border-2 
        rounded-lg w-3/4 md:w-1/3 lg:w-1/4 h-80 py-8 px-6
        border-transparent bg-custom-dark-brown  text-white"> 
            <div>
                <p>{title}</p>
                <p>{author}</p>
                <p>{rating}</p> 
            </div>
            
            <div className="flex flex-row justify-between">
                {/* for the delete button need to get the books id number */}
                <button><FiTrash2/></button>
                <button><FiEdit /></button>
            </div>
        </article>
    )
}

export default BookCard; 