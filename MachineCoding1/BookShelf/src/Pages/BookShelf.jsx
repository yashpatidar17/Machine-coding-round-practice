import { useContext } from "react";

import "./bookshelf.css";
import { BookContext } from "../Context/BookContextProvider";
import { useNavigate } from "react-router";
import { Book } from "../Component/Book";
export const BookShelf = () => {
  const naviagte = useNavigate();
const {bookData,currentStatehandler} = useContext(BookContext)
  const currentlyReading = bookData.filter(
    (item) => item.currentState === "currently reading"
  );
  const read = bookData.filter((item) => item.currentState === "read");
  const wantToRead = bookData.filter(
    (item) => item.currentState === "want to read"
  );

  
 

  return (
    <div className="bookshelf">
      <h2>Book Shelf </h2>
      <button onClick={()=>naviagte("/search")}>Search Books</button>
      <div className="bookcard">
        <h2>Currently Reading</h2>
        <div className="bookrow">
          {currentlyReading.length === 0 ? (
            <p>There is no book in this category</p>
          ) : (
            currentlyReading?.map((book) => <Book book={book} fun={currentStatehandler} key={book.id} />)
          )}
        </div>
        <hr />
      </div>
      <div className="bookcard">
        <h2>Read</h2>
        <div className="bookrow">
          {read.length === 0 ? (
            <p>There is no book in this category</p>
          ) : (
            read?.map((book) => <Book book={book} fun={currentStatehandler} key={book.id} />)
          )}
        </div>
        <hr />
      </div>
      <div className="bookcard">
        <h2>Want to read</h2>
        <div className="bookrow">
          {wantToRead.length === 0 ? (
            <p>There is no book in this category</p>
          ) : (
            wantToRead?.map((book) => <Book book={book} fun={currentStatehandler} key={book.id} />)
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};
