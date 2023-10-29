import { useState } from "react";
const EditForm = ({book, handleUpdate}) => { 
    
    const {id, title, author, rating, startDate, endDate} = book;
    const [bookToUpdate, setBookToUpdate] = useState({id:id, title: title, author:author, rating: rating.length, startDate:startDate, endDate:endDate})
    
    const handleChange = (e) => { 
        setBookToUpdate({ 
                 ...bookToUpdate, 
                 [e.target.id]: e.target.value
             }); 
    }



    return( 
    
        <form className="flex flex-col">
          
            <label htmlFor="title">
                Title
                <input className="m-1 p-1 text-custom-dark-brown rounded-lg"
                value={bookToUpdate.title}
                type="text"
                id="title"
                onChange={handleChange}
                required />
            </label>

            <label htmlFor="author">
                Author
                <input className="m-1 p-1 text-custom-dark-brown rounded-lg"
                value={bookToUpdate.author}
                type="text"
                id="author"
                onChange={handleChange} 
                required />
            </label>

            <label htmlFor="rating">
                Rating
                <select 
                className="m-1 p-1 text-custom-dark-brown rounded-lg" 
                name="rating" 
                id="rating" 
                value={bookToUpdate.rating}
                onChange={handleChange}
                required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>

            <label htmlFor="startDate">
                Start Date
                <input 
                type="date" 
                id="startDate" 
                value={bookToUpdate.startDate}
                onChange={handleChange}
                name="startDate" 
                className="m-1 p-1 text-custom-dark-brown rounded-lg" />
            </label>

            <label htmlFor="endDate">
                End Date
                <input 
                type="date" 
                id="endDate" 
                name="endDate" 
                value={bookToUpdate.endDate}
                onChange={handleChange}
                className="m-1 p-1 text-custom-dark-brown rounded-lg" />
            </label>

            <button className="bg-custom-dark-green transition-all delay-150 ease-in hover:bg-custom-md-green hover:text-custom-dark-brown hover:drop-shadow-lg  text-white mt-3 py-2 px-4 rounded-md md:w-1/2 self-center"
            type="button"
            onClick={() => handleUpdate(id, bookToUpdate)}>
                Update
            </button>

            
        </form>
    
        
    )
}


export default EditForm; 