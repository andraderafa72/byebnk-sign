import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: var(--background);
  /* border-bottom: 1px solid #353539; */
  background: var(--shape); 

  img{
    display: block;
    /* height: 5rem; */
    width: 200px;
    /* object-fit: cover; */
    /* background: #fff; */
  }

  button{
    display: flex;
    align-items: center;
    gap: .5rem;
    background: none;
    border:none;
    color: red;
    font-size: 1rem;
    text-transform: uppercase;
    img{
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media(max-width: 375px){
    img{
      width: 180px;
    }
  }
`;