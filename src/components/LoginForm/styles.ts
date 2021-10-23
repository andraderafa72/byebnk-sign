import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 2rem 1.5rem 3rem;
  background: var(--shape);
  border-radius: .5rem;

  > img{
    max-height: 4rem;
    margin: 1.25rem 0 3rem;
  }
  
  button {
    margin-top: 2rem;
    cursor: pointer;
    width: 100%;
    border: none;
    height: 3rem;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    background: var(--cyan);
    border-radius: .5rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;

  input{ 
    width: 100%;
    height: 3.25rem;
    padding: 1rem 1rem .25rem; 
    background: var(--inputs);
    color: var(--text);  
    border: none;
    border-radius: .5rem;
    font-size: 1rem;

    &:focus{
      outline: none;

      & + label{
        font-size: .7rem;
        top: .5rem;
      }
    }
  }

  label{
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: .9rem;
    transition: .2s;
    color: var(--text-body);  

    &.active {
      font-size: .7rem;
      top: .5rem;
    }
  }
`;