import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ButtonToolBar from '../components/ButtonToolBar'

const SignupForm = () => {

   const [formInitialState, setFormInitState] = useState({});
   const [initialValue, setInitialValue] = useState(false);

    useEffect(()=>{

        axios.get('http://localhost:3000/people') .then(response => { setFormInitState(response.data[response.data.length-1]);});
        setInitialValue(true);
    },[])

    const saveData = (data, formik) => {
      axios.post('http://localhost:3000/people',data={...data,id:parseInt(data.id)+1}) .then(response => { console.log(response.data); formik.resetForm({values:response.data});});
      
    }

    console.log(formInitialState);
    return (
      <>
        <h1>Subscribe!</h1>
        <Formik
          enableReinitialize
          initialValues={formInitialState}
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
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {
          (formik) => {
            console.log("dirty" + formik.dirty);
            return (
              <Form>
                <ButtonToolBar initialValue={false} dirty={formik.dirty} onSave={()=>saveData(formik.values,formik)} onCalculate={()=>saveData(formik.values,formik)} />
                <br/><br/>
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
      
            </Form>
            )
        }
        }
        </Formik>
      </>
    );
  };


export default SignupForm;