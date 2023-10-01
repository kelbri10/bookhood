const BookCard = ({title, author, rating}) => { 
    return(
        <article className="border-2 
        rounded-lg w-3/4 md:w-1/3 lg:w-1/4 h-80 py-8 px-6
        border-transparent bg-custom-dark-gray text-white"> 
            <div>
                <p>{title}</p>
                <p>{author}</p>
                <p>{rating}</p> 
            </div>
            
            <div>

            </div>
            {/* eventually want to display ratings as stars */}
        </article>
    )
}

export default BookCard; 