import { searchBooks } from "../../services/books";
import useDebounce from "../../hooks/useDebounce";
import LocalStorage from "../../utils/LocalStorage";
import PInput from "../Forms/CInput";
import { FC } from "react";

interface ISearchProps {
  search: string;
  setSearch: (setSearch: any) => void;
  setSearchedBooks: (setSearchedBooks: any) => void;
  setIsLoading?: (setIsLoading: any) => void;
}

const Search: FC<ISearchProps> = ({
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

  useDebounce(handleSearch, 500, search, [search]);

  return (
    <div className="search">
      <PInput
        className="searchInput"
        labelText="Search books"
        handleInputChange={(e) => {
          setSearch(e.target.value);
        }}
        clearFn={() => setSearch("")}
        placeholder="Search for a book"
        size="small"
        isClear={search}
        inputValue={search}
      />
    </div>
  );
};

export default Search;
