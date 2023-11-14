
const BookInfo = ({book, handleEdit}) => { 

    const {id, title, author, rating, startDate, endDate} = book;

    return(
        
        <article className="text-custom-green" key={id}> 
            <div>
                <p className="pb-4">{rating}</p> 
                <div className="flex flex-row gap-10">
                    <p className="font-bold">{title}</p>
                    <p>{author}</p>
                </div>
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