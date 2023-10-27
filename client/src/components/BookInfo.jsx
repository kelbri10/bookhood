
const BookInfo = ({book, handleEdit}) => { 

    const {id, title, author, rating, startDate, endDate} = book;

    return(
        
        <article key={id}> 
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
            
        </article>
    )
}

export default BookInfo; 