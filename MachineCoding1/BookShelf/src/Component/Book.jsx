

export const Book = ( {book,fun} )=>{
    return(
      <div key={book.id} className="BookCard">
      <img src={book.image} alt="bookimg" className="BookImage"/>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <select
        value={book.currentState}
        onChange={(event) => fun(event, book.id)}
      >
        <option value="currently reading">Currently Reading</option>
        <option value="read">Read</option>
        <option value="want to read">Want To Read</option>
        <option value="none">none</option>
      </select>
    </div>
    )
}