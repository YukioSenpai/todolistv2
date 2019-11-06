import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import * as actions from '../../../store/actions';
import {connect} from 'react-redux';
import styled from 'styled-components';
import '../../../../src/App.css';

import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Message from '../../../components/UI/Message/Message';

const MessageWrapper = styled.div`
    position: absolute;
    bottom: -2rem;
`;

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required')
    .min(8, 'Too short.'),
});

const RecoverPassword = styled.div`
  cursor: pointer;
  color: var(--color-whiteColor);
  color: inherit;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

const Login = ({signIn, loading, error, cleanUp}) => {
    useEffect(() => {
        return () => {
            cleanUp();
        };
    }, [cleanUp]);
    
    return (
        <Formik
        initialValues={{
            email: '',
            password:''
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting }) => {
            await signIn(values);
            setSubmitting(false);
            }}
        >
        {({isSubmitting, isValid}) => (
            <FormWrapper>
                <Heading noMargin size="h1" color="white">
                    Welcome
                </Heading>
                <Heading bold size="h4" color="white">
                    I'm happy to see you again <span role="img" aria-label="smiley">🙂</span>
                </Heading>
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
                   <Button 
                    disabled={!isValid || isSubmitting} 
                    loading={loading ? 'Logging in...' : null} 
                    type="submit"
                    >
                        Login
                    </Button>
                    <MessageWrapper>
                        <Message error show={error}>
                            {error}
                        </Message>
                    </MessageWrapper>
                    <RecoverPassword>
                        <Link 
                            to={'/recover'} 
                            className="a"
                        >
                            Change your password
                        </Link>
                    </RecoverPassword>
                </StyledForm>
            </FormWrapper>
        )}
        </Formik>
    );
};

const mapStateToProps = (auth) => ({
    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {
    signIn: actions.signIn,
    cleanUp: actions.clean,
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
