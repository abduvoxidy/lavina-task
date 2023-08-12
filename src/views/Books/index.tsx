import { useEffect, useState } from "react";
import { getBooks } from "../../services/books";
import Cards from "../../components/Cards";
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
        <Cards
          books={myBooks}
          isEditable={true}
          setMyBooks={setMyBooks}
          fetchBooks={fetchBooks}
        />
      ) : (
        <h3 className="list">
          Sizda kitoblar yo'q, kutubxonaga o'tib kitob qo'shing!
        </h3>
      )}
    </div>
  );
};

export default Books;
