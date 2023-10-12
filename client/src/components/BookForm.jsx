

const BookForm = ({form, handleChange, handleSubmit}) => { 
    
    return( 
        
        <form className="flex flex-col"
        onSubmit={handleSubmit}>
          
            <label htmlFor="title">
                Title
                <input className="m-2 p-2 w-5/6 md:w-full border-2 border-custom-dark-gray rounded-md text-custom-dark-gray"
                value={form.title}
                type="text"
                id="title"
                onChange={handleChange} />
            </label>

            <label htmlFor="author">
                Author
                <input className="m-2 p-2 w-5/6 md:w-full border-2 border-custom-dark-gray rounded-md text-custom-dark-gray "
                value={form.author}
                type="text"
                id="author"
                onChange={handleChange} />
            </label>

            <label htmlFor="rating">
                Rating
                <select className="m-2 border-2 border-custom-dark-gray rounded text-custom-dark-gray" name="rating" id="rating" onChange={handleChange}>
                    <option  value="1">1</option>
                    <option  value="2">2</option>
                    <option  value="3">3</option>
                    <option  value="4">4</option>
                    <option  value="5">5</option>
                </select>
            </label>

            <label htmlFor="startDate">
                Start Date
                <input 
                type="date" 
                id="startDate" 
                value={form.startDate}
                onChange={handleChange}
                name="startDate" 
                className="border-2 border-custom-dark-green p-2 m-4 rounded-md" />
            </label>

            <label htmlFor="endDate">
                End Date
                <input 
                type="date" 
                id="endDate" 
                name="endDate" 
                value={form.endDate}
                onChange={handleChange}
                className="border-2 border-custom-dark-green p-2 ml-4 rounded-md" />
            </label>

            <button className="bg-custom-dark-green transition-all delay-150 ease-in hover:bg-custom-md-green hover:text-custom-dark-brown hover:drop-shadow-lg hover:scale-125 text-white mt-6 py-2 px-4 rounded-md md:w-1/2 self-center"
            type="submit">Submit</button>
        </form>
    
        
    )
}

export default BookForm;