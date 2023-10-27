import { useState } from "react";
const EditForm = ({book, handleUpdate}) => { 
    
    const {id, title, author, rating, startDate, endDate} = book;
    const [form, setForm] = useState({id:id, title: title, author:author, rating: rating, startDate:startDate, endDate:endDate})
    
    const handleChange = (e) => { 
             setForm({ 
                 ...form, 
                 [e.target.id]: e.target.value
             }); 
    }

    return( 
    
        <form className="flex flex-col"
        onSubmit={() => handleUpdate(id, form)}>
          
            <label htmlFor="title">
                Title
                <input className="m-1 p-1 text-custom-dark-brown rounded-lg"
                value={form.title}
                type="text"
                id="title"
                onChange={handleChange}
                required />
            </label>

            <label htmlFor="author">
                Author
                <input className="m-1 p-1 text-custom-dark-brown rounded-lg"
                value={form.author}
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
                value={form.rating}
                onChange={handleChange}
                required>
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
                className="m-1 p-1 text-custom-dark-brown rounded-lg" />
            </label>

            <label htmlFor="endDate">
                End Date
                <input 
                type="date" 
                id="endDate" 
                name="endDate" 
                value={form.endDate}
                onChange={handleChange}
                className="m-1 p-1 text-custom-dark-brown rounded-lg" />
            </label>

            <button className="bg-custom-dark-green transition-all delay-150 ease-in hover:bg-custom-md-green hover:text-custom-dark-brown hover:drop-shadow-lg hover:scale-125 text-white mt-3 py-2 px-4 rounded-md md:w-1/2 self-center"
            type="submit">Save</button>
        </form>
    
        
    )
}


export default EditForm; 