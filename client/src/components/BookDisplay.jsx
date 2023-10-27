import BookCard from "./BookCard";


const BookDisplay = ({bookList, handleDelete, handleUpdate, handleChange}) => { 
   
   
    return(
        <section className=" flex flex-col items-center gap-2 md:flex-row md:gap-2 md:flex-wrap">
            {bookList.length === 0 ? 
            <p>You have no books to display. Click Add book to add a new book to your collection</p>
            : bookList.map(book => <BookCard book={book} handleDelete={handleDelete} handleUpdate={handleUpdate} />)}

        </section>
        
        
    )
}

export default BookDisplay; 