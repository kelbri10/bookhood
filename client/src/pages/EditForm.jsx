import { doc } from "firebase/firestore";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { db } from "../../utils/firebase-config";

const EditForm = () => { 
    const bookToEdit = useLoaderData(); 

    const handleEdit = async (id) => { 
        //convert p tags to input tags and select option for ratings 
        //let user choose to edit one or all 
        //click save
        //update doc in firestore
        //update booklist render 

        console.log('in the edit function')
        console.log(id); 
        // try{ 
        //     setEdit(true)
        //     let index = bookList.findIndex((book) => book.id === id )
        
        //     let bookToEdit = bookList[index]
        //     const bookRef = doc(db, "users", authenticatedUser.uid); 
        // } catch(err) { 
        //     console.log(err); 
        // }
    }

    // useEffect(() => { 
    //     const { bookId } = useParams();
    //     let index = bookList.findIndex((book) => book.id === bookId )
        
    //     let bookToEdit = bookList[index]
    // })
    return( 
        <p>in the edit form</p>
        
        // <form className="flex flex-col"
        // onSubmit={handleSubmit}>
          
        //     <label htmlFor="title">
        //         Title
        //         <input className="m-2 p-2 w-5/6 md:w-full border-2 border-custom-dark-gray rounded-md text-custom-dark-gray"
        //         value={}
        //         type="text"
        //         id="title"
        //         onChange={handleChange}
        //         required />
        //     </label>

        //     <label htmlFor="author">
        //         Author
        //         <input className="m-2 p-2 w-5/6 md:w-full border-2 border-custom-dark-gray rounded-md text-custom-dark-gray "
        //         value={}
        //         type="text"
        //         id="author"
        //         onChange={handleChange} 
        //         required />
        //     </label>

        //     <label htmlFor="rating">
        //         Rating
        //         <select 
        //         className="m-2 border-2 border-custom-dark-gray rounded text-custom-dark-gray" 
        //         name="rating" 
        //         id="rating" 
        //         onChange={handleChange}
        //         required>
        //             <option  value="1">1</option>
        //             <option  value="2">2</option>
        //             <option  value="3">3</option>
        //             <option  value="4">4</option>
        //             <option  value="5">5</option>
        //         </select>
        //     </label>

        //     <label htmlFor="startDate">
        //         Start Date
        //         <input 
        //         type="date" 
        //         id="startDate" 
        //         value={}
        //         onChange={handleChange}
        //         name="startDate" 
        //         className="border-2 border-custom-dark-green p-2 m-4 rounded-md" />
        //     </label>

        //     <label htmlFor="endDate">
        //         End Date
        //         <input 
        //         type="date" 
        //         id="endDate" 
        //         name="endDate" 
        //         value={}
        //         onChange={handleChange}
        //         className="border-2 border-custom-dark-green p-2 ml-4 rounded-md" />
        //     </label>

        //     <button className="bg-custom-dark-green transition-all delay-150 ease-in hover:bg-custom-md-green hover:text-custom-dark-brown hover:drop-shadow-lg hover:scale-125 text-white mt-6 py-2 px-4 rounded-md md:w-1/2 self-center"
        //     type="submit">Save</button>
        // </form>
    
        
    )
}

// export const bookToEditLoader = ({params}) => { 
//     const id = params; 
//     const booksRef = doc(db, "users", authe)
// }

export default EditForm; 