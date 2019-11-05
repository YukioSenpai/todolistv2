import React, { useState } from 'react';
import styled from 'styled-components';
import {FiEdit} from 'react-icons/fi';
import {MdDeleteForever} from 'react-icons/md';
import DeleteTodo from './DeleteTodo/DeleteTodo';
import InputTodo from '../InputTodo/InputTodo';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 4rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin-bottom: 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-white);
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const editStyles = {
  color: 'var(--color-main)',
  margin: '0 1rem',
  cursor: 'pointer',
};

const deleteStyles = {
  color: 'var(--color-errorRed)',
  margin: '1.65 .2rem',
  cursor: 'pointer',
};

const Todo = ({ todo }) => {
  const [isDeleting, setisDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Wrapper>
      {todo.todo}
      <Controls>
        <span>
          <FiEdit style={editStyles} size={13}
            onClick={() => setIsEditing(true)}/>
        </span>
        <span>
          <MdDeleteForever
          style={deleteStyles} size={17}
          onClick={() => setisDeleting(true)} />
          </span>
        <DeleteTodo
          todo={todo}
          show={isDeleting}
          close={() => setisDeleting(false)}
        />
        <InputTodo
          editTodo={todo}
          opened={isEditing}
          close={() => setIsEditing(false)}
        />
      </Controls>
    </Wrapper>
  );
};

export default Todo;