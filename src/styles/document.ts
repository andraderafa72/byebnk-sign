import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #525659;
  padding-top: 1rem;
  padding: 1rem 10%;

  > a {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: var(--text);
    font-weight: bold;
    font-size: 1.1rem;

    display: flex;
    align-items: center;

    img{
      transform: rotate(180deg);
    }
  }

  @media(max-width:475px){
    padding-top: 5rem;
  }
`;