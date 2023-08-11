import { useEffect, useState } from "react";
import { getBooks } from "../../services/books";
import GridList from "../../components/Cards";
import { FC } from "react";

import "./Books.scss";

const Books: FC = () => {
  const [myBooks, setMyBooks] = useState([]);

  const fetchBooks = () => {
    getBooks().then((response) => {
      setMyBooks(response.data.data);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="books">
      {myBooks?.length > 0 ? (
        <GridList
          books={myBooks}
          isEditable={true}
          setMyBooks={setMyBooks}
          fetchBooks={fetchBooks}
        />
      ) : (
        <div className="empty">
          You don't have any books yet. Please add some books to your library.
        </div>
      )}
    </div>
  );
};

export default Books;
