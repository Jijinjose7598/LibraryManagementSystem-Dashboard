import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
        isbn: '',
        publicationDate: '',
        ...initialValues,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div className="form-card">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <Field name="title" type="text" className="form-control" id="title"/>
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <Field name="author" type="text" className="form-control" id="author"/>
              <ErrorMessage name="author" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="isbn" className="form-label">ISBN</label>
              <Field name="isbn" type="text" className="form-control" id="isbn"/>
              <ErrorMessage name="isbn" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="publicationDate" className="form-label">Publication Date</label>
              <Field name="publicationDate" type="date" className="form-control" id="publicationDate"/>
              <ErrorMessage name="publicationDate" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
