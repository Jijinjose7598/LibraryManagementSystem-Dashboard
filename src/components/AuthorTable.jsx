import React from 'react';

const AuthorTable = ({ data = [], onDelete, onEdit }) => {
  return (
    <div>
      <h3>Author Table</h3>
      <div className='table-card'>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birth Date</th>
              <th scope="col">Biography</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((author, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{author.name}</td>
                  <td>{author.birthDate}</td>
                  <td>{author.biography}</td>
                  <td>
                    <button onClick={() => onEdit(author)} className="btn-edit btn-warning">Edit</button>
                    <button onClick={() => onDelete(author.name)} className="btn-delete btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuthorTable;
