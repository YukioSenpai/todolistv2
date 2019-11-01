import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FormWrapper } from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Forms/Button/Button';
import Message from '../../../components/UI/Message/Message';

import * as actions from '../../../store/actions';

const VerifyEmail = () => {
  return (
    <FormWrapper>
        <Heading noMargin color="white" size="h1">
          Verify your email
        </Heading>
        <Heading color="white" bold size="h4">
          Go to your email inbox, and please verify your email.
        </Heading>
    </FormWrapper>
  );
};

export default VerifyEmail;