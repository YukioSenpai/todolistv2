import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';

import * as actions from '../../../store/actions';

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
    .required('Your first name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too much'),
    lastName: Yup.string()
    .required('Your last name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too much'),
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required')
    .min(8, 'Too short.'),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('You need to confirm your password'),
});

const SignUp = ({signUp}) => {
    return (
        <Formik
        initialValues={{
            firstName: '',
            LastName: '',
            email: '',
            password:'',
            onfirmPassword: ''
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
            signUp(values);
            setSubmitting(false);
            }}
        >
        {({isSubmitting, isValid}) => (
            <FormWrapper>
                <Heading noMargin size="h1" color="white">
                    Sign up for an account
                </Heading>
                <Heading bold size="h4" color="white">
                    Enter an email & password to register
                </Heading>
                <StyledForm>
                    <Field 
                        type="text" 
                        name="firstName" 
                        placeholder="Your first name.." 
                        component={Input}
                    />
                    <Field 
                        type="text" 
                        name="lastName" 
                        placeholder="Your last name.." 
                        component={Input}
                    />
                    <Field 
                        type="email" 
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
                    <Field 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm your password"
                        component={Input}
                    />
                    <Button disabled={!isValid} type="submit">SignUp</Button>
                </StyledForm>
            </FormWrapper>
        )}
        </Formik>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    signUp: actions.signUp
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SignUp);
