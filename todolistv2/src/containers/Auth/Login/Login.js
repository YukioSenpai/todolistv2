import React from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required')
    .min(8, 'Too short.'),
});

const Login = () => {
    return (
        <Formik
        initialValues={{
            email: '',
            password:''
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            console.log(values);
            }}
        >
        {({isSubmitting, isValid}) => (
            <FormWrapper>
                <StyledForm>
                    <Field 
                        type="email" n
                        name="email" 
                        placeholder="Your email.." 
                        component={Input}
                    />
                    <Field 
                        type="password" 
                        name="password" 
                        placeholder="Your password.."
                        component={Input}
                    />
                    <Button type="submit">Submit</Button>
                </StyledForm>
            </FormWrapper>
        )}
        </Formik>
    );
};

export default Login;
