import "./BooksContainer.css";
import comics from "../../assets/comics.json";

function ComicsContainer() {
  return (
    <div className="bookCard">
      {comics.map((comic) => (
        <div key={comic.id}>
          <h2 className="titleBook">{comic.title}</h2>
          <img src={comic.coverImage} alt={comic.title} />
        </div>
      ))}
    </div>
  );
}

export default ComicsContainer;
