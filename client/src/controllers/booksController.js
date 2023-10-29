import { db } from "../../utils/firebase-config";
import { arrayRemove, doc, getDoc, setDoc, updateDoc} from "firebase/firestore"; 

//setDoc/updateDoc/addDoc take doc references so when doing a reference must start with doc 
//collection refers to the collection reference 

const getAllBooks = async (userId) => { 
    const userRef = doc(db, "users", userId); 
    const userSnap = await getDoc(userRef);
    return userSnap; 
}
const addNewBook = async (userId, form, bookList) => { 
    const userRef = doc(db, "users", userId); 
    await updateDoc(userRef, {books:[...bookList, form]}); 
}

const updateBook = async (userId, updatedList) => { 
    const bookRef = doc(db, "users", userId); 
    await setDoc(bookRef, {books: updatedList})
}

const deleteBook = async (userId, book) => { 
    const bookRef = doc(db, "users", userId); 
        
    //something to note is that each individual book is a Map data structure - simple key value pairings 
    //https://firebase.google.com/docs/reference/rules/rules.Map 
    await updateDoc(bookRef, { 
        books: arrayRemove(book)
    }); 
}

export { addNewBook, updateBook, deleteBook, getAllBooks }; 