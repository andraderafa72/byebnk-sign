import styled from "styled-components";

interface ModalContentProps {
  type: string;
}

export const ModalContent = styled.div<ModalContentProps>`
  display: flex;
  flex-direction: column;

  h3{
    line-height: 280%;
    padding: .5rem 2rem 0 1rem;
    border-bottom: 1px solid #eee;
    /* margin: 1rem 0 0; */
    font-weight: normal;

    span{
      color: ${props => props.type === 'Reject' ? 'var(--red)' : 'var(--blue)'};
      font-weight: bold;
    }
  }

  p{
    padding-left: 1rem;
    margin: 1rem 0;
  }

  .buttons{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .75rem;
    margin-top: 1rem;
    padding: 1rem;
    border-top: 1px solid #eee;

    button{
      max-width: 180px;
      width: 30%;
      height: 2.25rem;
      border-radius: .5rem;
      border: none;
      color: var(--text);
      font-size: 1rem;
      cursor: pointer;
      transition: .2s;

      &.cancel{
        background: transparent;
        color: var(--red);
        width: auto;
        padding: 0 .5rem;

        &:hover{
          /* background: var(--red); */
          /* color: var(--text); */
          /* font-weight: bold; */
          text-decoration: underline;
        }
      }

      &.confirm{
        background: var(--blue);
        &:hover{
          filter: brightness(.9);
        }
      }
    }
  }
`; 