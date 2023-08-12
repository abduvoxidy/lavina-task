import { FC } from "react";
import toast from "react-hot-toast";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, MenuItem, Select } from "@mui/material";

// functions
import { addBook, changeStatus, deleteBook } from "../../services/books";

interface ICardProps {
  book: any;
  status?: number;
  isEditable?: boolean;
  fetchBooks?: () => void;
  setMyBooks?: (setMyBooks: any) => void;
}

const Card: FC<ICardProps> = ({
  book,
  status,
  isEditable,
  fetchBooks,
  setMyBooks,
}) => {
  const handleAdd = () => {
    addBook(book.isbn)
      .then((response) => {
        console.log("response", response);
        toast.success("Successfully added!");
      })
      .catch((error) => {
        console.log("error", error?.response?.data?.message);
      });
  };

  const handleDelete = () => {
    deleteBook(book.id).then((response) => {
      toast.success("Succesfully deleted!");
      setMyBooks && setMyBooks(response.data.data);
    });
  };

  const handleChange = (event: any) => {
    changeStatus(book.id, event.target.value).then(() => {
      fetchBooks && fetchBooks();
      toast.success("Succesfully updated!");
    });
  };

  return (
    <div className="card">
      <div className="image-holder">
        <img
          src={book.cover}
          alt={book.title}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = "https://svarkasvarka.ru/uploads/no-img.jpg";
          }}
        />
      </div>
      <div className="top">
        <div>
          <div className="author">{book.author}</div>
          <div className="title">{book.title}</div>
        </div>
      </div>
      {!isEditable ? (
        <div className="bottom">
          <div className="isbn">ISBN: {book.isbn}</div>
          <div className="published">{book.published}</div>
        </div>
      ) : (
        <div className="actions">
          <div
            style={{
              width: "200px",
            }}
          >
            <Select
              fullWidth
              value={status?.toString() || "0"}
              onChange={handleChange}
            >
              <MenuItem value={0}>Yangi</MenuItem>
              <MenuItem value={1}>O'qilayotgan</MenuItem>
              <MenuItem value={2}>Tugatilgan</MenuItem>
            </Select>
          </div>

          <Button variant="contained" className="delete" onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </div>
      )}
      {!isEditable && (
        <Button variant="contained" onClick={handleAdd}>
          <AddIcon />
        </Button>
      )}
    </div>
  );
};

export default Card;
