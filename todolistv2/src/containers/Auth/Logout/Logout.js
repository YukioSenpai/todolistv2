 
import React, {useState } from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';

import * as actions from '../../../store/actions';

import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Forms/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';



const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const HeadingWrapper = styled.div`
    text-align: center;
    padding: 30px;
`;

const Logout = ({ logout }) => {

  const history = useHistory();

  function handleClick() {
    history.push("/todos");
  }

  const [modalOpened, setModalOpened] = useState(true);

  return (
      <Modal opened={modalOpened} close={() => setModalOpened(false)}>
        <HeadingWrapper>
        <Heading noMargin size="h2" color="white">
          ARE YOU SURE YOU WANT TO LOG OUT ?
        </Heading>
        </HeadingWrapper>
        <ButtonsWrapper>
        <Button color="main" contain onClick={() => logout()}>
            Yes
          </Button>
          <Button color="main" contain onClick={handleClick}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </Modal>
  );
};

const mapDispatchToProps = {
  logout: actions.signOut,
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);