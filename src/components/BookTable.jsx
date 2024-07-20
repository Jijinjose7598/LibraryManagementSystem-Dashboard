import React from 'react';

const BookTable = ({ data = [], onDelete, onEdit }) => {
  return (
    <div>
      <h3>Book Table</h3>
      <div className='table-card'>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">ISBN</th>
              <th scope="col">Publication Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((book, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.publicationDate}</td>
                  <td>
                    <button onClick={() => onEdit(book)} className="btn-edit btn-warning">Edit</button>
                    <button onClick={() => onDelete(book.isbn)} className="btn-delete btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTable;
