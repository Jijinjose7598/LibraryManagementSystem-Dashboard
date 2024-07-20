import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';
import BookTable from './components/BookTable';
import AuthorTable from './components/AuthorTable';
import './style.css';

function App() {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('DashBoard');
  
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [currentAuthor, setCurrentAuthor] = useState(null);

  const handleNavigation = (path, componentName) => {
    navigate(path);
    setSelectedComponent(componentName);
  };

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleEditBook = (updatedBook) => {
    setBooks(books.map((book) => (book.isbn === updatedBook.isbn ? updatedBook : book)));
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const handleEditAuthor = (updatedAuthor) => {
    setAuthors(authors.map((author) => (author.name === updatedAuthor.name ? updatedAuthor : author)));
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter((author) => author.name !== name));
  };

  return (
    <div className="container">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <ul className="list-unstyled">
            <li onClick={() => handleNavigation('/', 'DashBoard')}><h3>DashBoard</h3></li>
            <li onClick={() => handleNavigation('/bookform', 'BookForm')}><h6>Book Form</h6></li>
            <li onClick={() => handleNavigation('/authorform', 'AuthorForm')}><h6>Author Form</h6></li>
            <li onClick={() => handleNavigation('/booktable', 'BookTable')}><h6>Book Table</h6></li>
            <li onClick={() => handleNavigation('/authortable', 'AuthorTable')}><h6>Author Table</h6></li>
          </ul>
        </div>
      </div>
      <div className="content">
        {selectedComponent === 'DashBoard' && <DashBoard />}
        {selectedComponent === 'BookForm' && (
          <BookForm
            initialValues={currentBook}
            onSubmit={(book) => {
              if (currentBook) {
                handleEditBook(book);
              } else {
                handleAddBook(book);
              }
              setCurrentBook(null);
              handleNavigation('/booktable', 'BookTable');
            }}
          />
        )}
        {selectedComponent === 'AuthorForm' && (
          <AuthorForm
            initialValues={currentAuthor}
            onSubmit={(author) => {
              if (currentAuthor) {
                handleEditAuthor(author);
              } else {
                handleAddAuthor(author);
              }
              setCurrentAuthor(null);
              handleNavigation('/authortable', 'AuthorTable');
            }}
          />
        )}
        {selectedComponent === 'BookTable' && (
          <BookTable
            data={books}
            onEdit={(book) => {
              setCurrentBook(book);
              handleNavigation('/bookform', 'BookForm');
            }}
            onDelete={(isbn) => handleDeleteBook(isbn)}
          />
        )}
        {selectedComponent === 'AuthorTable' && (
          <AuthorTable
            data={authors}
            onEdit={(author) => {
              setCurrentAuthor(author);
              handleNavigation('/authorform', 'AuthorForm');
            }}
            onDelete={(name) => handleDeleteAuthor(name)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
