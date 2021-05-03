import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
    return (
      <>
        <h1>Subscribe!</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            jack: '',
            acceptedTerms: false, // added for our checkbox
            jobType: '', // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
              .oneOf(
                ['designer', 'development', 'product', 'other'],
                'Invalid Job Type'
              )
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" type="text" />
         <ErrorMessage name="firstName" />
 
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
 
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />
         <br/>
 
         <br/>
         <br/>

         <Field name="jack" type="text" />
         <button type="submit">Submit</button>
       </Form>
        </Formik>
      </>
    );
  };


export default SignupForm;