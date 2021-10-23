import styled from "styled-components";

interface CointainerProps {
  size: string;
}

export const Container = styled.aside<CointainerProps>`
  width: ${(props) => props.size === 'small' ? '80px' : '280px'};
  position: fixed;
  top: calc(50% + 2.5rem);
  left: 0;
  transform: translateY(-50%);
  height: 600px;
  display: flex;
  flex-direction: column;
  background: var(--shape); 
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0 4px 12px 0 rgba(99,99,99,.08);
  transition: .3s ease-out ;
  
  > img{
    width: 2.5rem;
    height: 2.5rem;
    margin: 1rem 1.5rem 0 auto;
    transform: ${(props) => props.size === 'large' ? 'rotate(180deg)' : 'rotate(0)'};
    transition: .2s ;
    cursor: pointer;
    padding: .25rem;
    
    &:hover{
      background: var(--background);
      border-radius: .5rem;
    }
  }

  nav.icons{
    margin-top: 1rem;
    width: 100%;
    display: ${(props) => props.size === 'small' ? 'flex' : 'none'};
    align-items: center;
    flex-direction: column; 
    li{
      width: 100%;
      & + li{
      }
      a{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3.5rem;
        padding: 0 .5rem 0 1.5rem;

        &:hover, &.active{
          img{
            opacity:1;
          }
        }

        img{
          width: 2rem;
          height: 2rem;
          opacity: .7;
          transition: .2s;
        }
      }
    }
  }

  nav:not(.icons){
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column; 
    display: ${(props) => props.size === 'small' ? 'none' : 'flex'};
    animation: showLink .4s ease;

    li{
      width: 100%;
      & + li{
      }
      a{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 3.5rem;
        padding: 0 .5rem 0 1.25rem;
        transition: .2s;
        font-weight: bold;
        transition: .5s ease;
        min-width:  ${(props) => props.size === 'small' ? '80px' : '280px'};
        
        img{
          opacity: .8;
        }
        &:hover{
          /* border-bottom-color: var(--purple); */
          background: var(--background);
          img{
            opacity: 1;
          }
        }
        
        &.active{
          /* border-bottom-color: var(--purple); */
          border-bottom: 2px solid var(--cyan);

          background: var(--background);
          img{
            opacity: 1;
          }
        }
      }
    }
  }

  @keyframes hideLink{
    from{
      display: inline-flex;
      opacity: 1;
    }
    to{
      display: none;
      opacity: 0;
    }
  }
  @keyframes showLink{
    from{
      transform: translateX(-390px);
    }
    to{
      transform:  translateX(0)
    }
  }
`;