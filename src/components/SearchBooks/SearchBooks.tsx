import { FC } from "react";

// components
import PInput from "../Forms/CInput";

// functions
import { searchBooks } from "../../services/books";
import useDebounce from "../../hooks/useDebounce";
import LocalStorage from "../../utils/LocalStorage";

interface ISearchProps {
  search: string;
  setSearch: (setSearch: any) => void;
  setSearchedBooks: (setSearchedBooks: any) => void;
  setIsLoading?: (setIsLoading: any) => void;
}

const SearchBooks: FC<ISearchProps> = ({
  search,
  setSearch,
  setIsLoading,
  setSearchedBooks,
}) => {
  const userData = LocalStorage.get("userData");

  const handleSearch = () => {
    setIsLoading && setIsLoading(true);
    searchBooks(search, userData?.key, userData?.secret).then((response) => {
      setSearchedBooks(response.data.data);
      setIsLoading && setIsLoading(false);
    });
  };

  useDebounce(handleSearch, 400, search, [search]);

  return (
    <div className="search">
      <PInput
        className="searchInput"
        labelText="Kitob qidirish"
        handleInputChange={(e) => {
          setSearch(e.target.value);
        }}
        clearFn={() => setSearch("")}
        placeholder="Kitob qidirish"
        size="small"
        isClear={search}
        inputValue={search}
      />
    </div>
  );
};

export default SearchBooks;
