import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: var(--background);
`;

interface ContainerProps {
  size: string;
}

export const Container = styled.section<ContainerProps>`
 
  width: calc(100vw - ${(props) => props.size === 'small' ? '80px' : '280px'});
  height: calc(100vh - 5rem);
  /* display: flex; */
  /* flex-wrap: wrap; */
  padding: 4rem;
  margin-left: ${(props) => props.size === 'small' ? '80px' : '280px'};
  transition: .3s;
  h1{
    font-size: 3.5rem;
    color: var(--text);
    width: 100%;
    margin-bottom: 2rem;
    font-weight: 900;
  }
`;