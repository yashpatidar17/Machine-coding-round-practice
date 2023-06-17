import { createContext, useState } from "react"
import { BooksData } from "../DB/BooksData";

export const BookContext = createContext()

export const BookContextProvider = ({children})=>{
    const [bookData, setBookData] = useState(BooksData);
    const currentStatehandler = (event, id) => {
        setBookData((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, currentState: event.target.value } : item
          )
        );
      };
    return(
        <div>
            <BookContext.Provider value={{bookData, setBookData,currentStatehandler}}>
                {children}
            </BookContext.Provider>
        </div>
    )
}