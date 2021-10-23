import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #0E0E0E;
    --red: #E52E4D;
    --cyan:#B1C6FA;
    --green: #33CC95;
    --blue: #5795F1;
    --purple: rgb(130, 87, 229);
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text: #f2f2f2;
    --text-body: #969CB3;
    --shape: #151618;
    --inputs: #1F1F1F;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    overflow-x: hidden;
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 768px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  nav{
    list-style: none;
  }
  
  a{
    text-decoration: none;
    color: var(--text)
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0, .5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .4s;

    &:hover{
      filter: brightness(.9);
    }
  }
`
