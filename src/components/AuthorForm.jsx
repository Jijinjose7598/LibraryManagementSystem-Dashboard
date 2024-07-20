import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        birthDate: '',
        biography: '',
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
              <label htmlFor="name" className="form-label">Name</label>
              <Field name="name" type="text" className="form-control" id="name"/>
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate" className="form-label">Birth Date</label>
              <Field name="birthDate" type="date" className="form-control" id="birthDate"/>
              <ErrorMessage name="birthDate" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="biography" className="form-label">Biography</label>
              <Field name="biography" type="text" className="form-control" id="biography"/>
              <ErrorMessage name="biography" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
