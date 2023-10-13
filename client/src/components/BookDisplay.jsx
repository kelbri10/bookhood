import BookCard from "./BookCard";


const BookDisplay = ({bookList}) => { 
    
    return(
        <section className=" flex flex-col items-center gap-2 md:flex-row md:gap-2 md:flex-wrap">
            {bookList.length === 0 ? 
            <p>You have no books to display. Click Add book to add a new book to your collection</p>
            : bookList.map(book => <BookCard title={book.title} author={book.author} rating={book.rating} startDate={book.startDate} endDate={book.endDate} key={book.id}/>)}

        </section>
        
        
    )
}

export default BookDisplay; 