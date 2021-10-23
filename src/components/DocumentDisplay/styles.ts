import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  .react-pdf__Page{
    max-width: 1300px;
    height: 100vh;
  }

  .pagination{
    border-radius: .25rem;
    box-shadow: 0px 4px 32px 0 rgba(11,11,11,.16);
    background: #15161883;
    backdrop-filter: blur(16px);
    color: var(--text); 
    position: fixed;
    bottom: 6rem;
    left: 50%;
    transform: translateX(-50%);

    span{
      margin: 0 1rem;
      font-weight: bold;
    }

    button{
      cursor: pointer;
      width: 40px;
      height: 40px;
      background: none;
      font-weight: 900;
      color: var(--text);
      border: none;
      border-radius: .25rem;
      &:hover{
        background: var(--blue);
      }
    }
  }
`;