import Card from "./Card";
import { FC } from "react";
import { Container } from "@mui/material";

import "./Cards.scss";

interface ICardsProps {
  books: any;
  isEditable?: boolean;
  fetchBooks?: () => void;
  setMyBooks?: (setMyBooks: any) => void;
}

const Cards: FC<ICardsProps> = ({
  books,
  isEditable,
  setMyBooks,
  fetchBooks,
}) => {
  return (
    <Container>
      <div className="cards">
        {books.map((book: any) => {
          return (
            <Card
              book={book?.book || book}
              key={book?.book?.isbn || book?.isbn}
              isEditable={isEditable}
              setMyBooks={setMyBooks}
              status={book?.status}
              fetchBooks={fetchBooks}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Cards;
