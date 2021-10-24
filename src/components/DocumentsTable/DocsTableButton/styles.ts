import styled from "styled-components";

interface ContainerProps {
  signed: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.signed ? 'var(--blue)' : '#B1C6FA'};
  border-radius: .25rem;
  max-width: 110px;
  margin-left: auto;

  > a{ 
    color: var(--background);
    font-weight: bold;
    padding: .5rem .5rem;
  }

  img{
    filter: invert(100%);
    transform: rotate(90deg);
    cursor: pointer;

    &:hover{
      filter: brightness(1);
    }
  }

  .wrapper{
    display: none;
    position: absolute;
    top: 99%;
    left: 0;
    z-index: 0;
    width: 100%;
    
    a{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;      
      width: 100%;
      border: none;
      font-size: 1rem;
      height: 2rem;
      padding: 0 1rem;
      background: #fff;
      color: var(--background);
      border-radius: 0 0 .5rem .5rem;
      font-weight: bold;      
    }

    &.visible{
      display: block;
    }
  }
`;