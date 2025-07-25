import { Card } from "react-bootstrap";
import { MdCheckCircle } from "react-icons/md";
import { type Book } from "@/data/booksData";

interface BookCardContentProps {
  book: Book;
  onSelect: (book: Book) => void;
  isSelected: boolean;
}

export function BookCardContentProps({
  book,
  onSelect,
  isSelected,
}: BookCardContentProps) {
  return (
    <div
      className={`d-flex flex-row clickable${isSelected ? " selected" : ""}`}
      style={{
        cursor: "pointer",
        position: "relative",
        background: isSelected ? "#e3f2fd" : undefined,
      }}
      onClick={() => onSelect(book)}
    >
      <Card.Img
        variant="top"
        src={book.URL}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placeholder.pics/svg/200x300/DEDEDE/555555/Book";
        }}
        className="flex-shrink-0"
        style={{ width: "200px", height: "100%", objectFit: "cover" }}
      />
      {isSelected && (
        <MdCheckCircle
          size={32}
          color="#2196f3"
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "white",
            borderRadius: "50%",
            zIndex: 2,
          }}
        />
      )}
      <Card.Body className="d-flex flex-column flex-grow-1">
        <div className="pb-4">
          <Card.Title className="fw-bold">{book.Name}</Card.Title>
          <Card.Subtitle>{book.Author}</Card.Subtitle>
          <Card.Text>{book.Publisher}</Card.Text>
          <Card.Text className={`fw-bold${book.StockonHand <= 0 ? "text-danger" : ""}`}>
            {book.StockonHand <= 0 ? "Sin stock" : `Stock: ${book.StockonHand}`}
          </Card.Text>
        </div>
        <Card.Footer className="mt-auto fw-bold text-center fs-3">
          S/.{book.PreciodeVenta.toFixed(2)}
        </Card.Footer>
      </Card.Body>
      
    </div>
  );
}
