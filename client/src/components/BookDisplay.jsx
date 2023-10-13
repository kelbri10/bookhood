import BookCard from "./BookCard";


const BookDisplay = ({bookList, handleDelete}) => { 
    // const handleDelete = (id) => { 
    //     //find where the id = id in the book array in the firestore 
    //     //delete doc 
    //     let newBookList = bookList.filter(book => book.id !== id); 
    //     console.log(newBookList)
    //     console.log(`book deleted at ${id}`)
    //     setBookList(prevState => [...newBookList]); 
    // }
    const handleEdit = (id) => { 
        console.log(`book edited at ${id}`)
    }
    
    return(
        <section className=" flex flex-col items-center gap-2 md:flex-row md:gap-2 md:flex-wrap">
            {bookList.length === 0 ? 
            <p>You have no books to display. Click Add book to add a new book to your collection</p>
            : bookList.map(book => <BookCard book={book} handleDelete={handleDelete} handleEdit={handleEdit}/>)}

        </section>
        
        
    )
}

export default BookDisplay; 