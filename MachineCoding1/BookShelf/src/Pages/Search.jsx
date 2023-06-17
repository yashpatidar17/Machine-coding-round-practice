import { useContext, useState } from "react";
import "./search.css";
import { BookContext } from "../Context/BookContextProvider";
import { Book } from "../Component/Book";
import { useNavigate } from "react-router";
export const Search = () => {
  const { bookData, currentStatehandler } = useContext(BookContext);

  const [sValue, setSValue] = useState("");
const navigate = useNavigate()
  const searchHandler = (e) => {
    setSValue(e.target.value);
  };
  const appliedFilter = () => {
    let books = [...bookData];

    if (sValue.length > 0) {
      return (books = books.filter((item) =>
        item.title.toLowerCase().includes(sValue.toLowerCase())
      ));
    }

    return books;
  };

  const newArray = appliedFilter();
  return (
    <div className="search-Container">
      <h2>Search Books Here</h2>
      <button onClick={()=>navigate("/") } className="homeButton">Home</button>
      <input
        onChange={searchHandler}
        className="inputbar"
        placeholder="search books here"
      />
      <div className="searchbook">
        {newArray.length === 0 ? (
          <p>No Books Found</p>
        ) : (
          newArray?.map((item) => (
            <Book book={item} fun={currentStatehandler} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};
