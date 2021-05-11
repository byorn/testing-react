import { Formik, Field, Form, ErrorMessage } from 'formik';
import usePermissions from '../components/usePermissions';
const SimpleForm=()=>{

    const perm = usePermissions();
 
    return(
            <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" {...perm}/>
            <ErrorMessage name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" {...perm}/>
            <ErrorMessage name="lastName" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" {...perm}/>
            <ErrorMessage name="email" />
            <br/>

            <br/>
            <br/>

            <Field name="jack" type="text" {...perm}/>
            <button type="submit" {...perm}>Submit</button>
        </Form>
    )
}
export default SimpleForm;