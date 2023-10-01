import "./BooksContainer.css";
import books from "../../assets/libros.json";

function BooksContainer() {
  return (
    <div className="bookCard">
      {books.map((book) => (
        <div key={book.id}>
          <h2 className="titleBook">{book.title}</h2>
          <img src={book.coverImage} alt={book.title} />
        </div>
      ))}
    </div>
  );
}

export default BooksContainer;
