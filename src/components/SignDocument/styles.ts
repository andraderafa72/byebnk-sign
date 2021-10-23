import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #323639;
  padding: .5rem 1rem;

  button, a{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background: transparent;
    height: 3rem;
    width: 180px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: .75rem;
    border: 1px solid var(--blue);
    color: var(--text);
    transition: .2s;
    & + button{
      margin-left: 1.5rem;
    }
    
    &.sign{
      background: var(--blue);
      filter: brightness(.9);
      /* color:  var(--background); */
    }
    
    &:hover{
      background: var(--blue);
    }

    &.sign:hover{
      filter: none;
    }
  }
`;