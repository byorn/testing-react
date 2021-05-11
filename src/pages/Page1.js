import SimpleForm from '../components/SimpleForm'
import {Formik} from 'formik'
const Page1 = () => {
    return(
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
          }}> 
         <SimpleForm/>
        </Formik>
    </>
    )
}
export default Page1;

const withPermissions=(Comp)=>{
    const permissions = {create: false, read: false, update: false, delete: false};
    const isReadOnly = !permissions.create && !permissions.update;
    const isHide = !permissions.read;
    const uiPerms = {isReadOnly, isHide}
    return <Comp {...uiPerms}/>
}