import { useState, useEffect } from "react";
import SearchBooks from "../../components/SearchBooks/SearchBooks";
import Cards from "../../components/Cards";
import { CircularProgress } from "@mui/material";

import "./Home.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    if (search.length === 0) {
      setSearchedBooks([]);
    }
  }, [search]);

  return (
    <div className="home">
      <SearchBooks
        search={search}
        setSearch={setSearch}
        setSearchedBooks={setSearchedBooks}
        setIsLoading={setIsLoading}
      />

      {isLoading ? (
        <div className="list">
          <CircularProgress />
        </div>
      ) : searchedBooks.length > 0 ? (
        <Cards books={searchedBooks} />
      ) : search.length > 0 ? (
        <h2 className="list">
          Siz qidirgan kitob topilmadi, qayta urinib ko'ring
        </h2>
      ) : (
        <h2 className="list">
          Javoningizga kitob qo'shish uchun kerakli kitobning nomini qidiring
        </h2>
      )}
    </div>
  );
}

export default Home;
