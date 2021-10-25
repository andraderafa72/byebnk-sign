import styled from 'styled-components';

// export const Table = styled.table`
//   border-collapse: collapse;
//   background: var(--shape);
//   width: 100%;

//   tr{
//     height: 3rem;
//   }
//   td,th{
//     color: var(--text);
//   }
// `;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0 .5rem;
    
    thead tr{
      /* border: 1px solid var(--cyan); */
      background: #B1C6FA; 
    }

    tr{
      display: table;
      width: 100%;
      height: 3rem;
      border-radius: .5rem;
    }

    thead th{
      color: var(--background);
      font-weight: 700;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.2rem;
    }

    td{
      padding: 1.25rem 2rem;
      border: 0;
      text-align: left;
      background: var(--shape);
      color: var(--text);

    }
    th,td {
      &:first-child{
        border-radius: 0.675rem 0 0 .675rem;
        img{
          width: 2.5rem;
          height: 2.5rem;
        }
        width: 50px;
        max-width: 50px;
      }
      &:nth-child(2){
        width: 60%;
      }
      &:nth-child(3){
        width: 200px;
      }
      &:nth-child(4){
        width: 180px;
      }

      &:last-child{
        width: 180px;
        max-width: 180px;
        text-align: right;
        border-radius: 0 0.675rem .675rem 0;
      }
    }

    @media(max-width: 768px){
      tr{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin-bottom: 1rem;

        td{
          display: block;
          width: 100%!important;
          max-width: 100%!important;
          text-align: center;
          padding: .5rem;

          &:first-child{
            border-radius: 0.675rem .675rem 0 0;
          }

          &:last-child{
            border-radius: 0 0 0.675rem .675rem;
            padding-bottom: 1rem;
          }
        }
      }
    }
`;

export const FiltersDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;

  span{
    font-size: 1.1rem;
    color: var(--text-body);
  }
  select{
    cursor: pointer;
    display: block;
    height: 2.75rem; 
    background: var(--shape);
    border: none;
    padding: 0 1rem;
    color: var(--text);
    font-size: 1rem;
    border-radius: .25rem;
  }

  @media(max-width: 768px){
    gap: .5rem;
    span{
      font-size: .9rem;
    }
    
    select{
      font-size: .9rem;
      padding:0 .2rem;
    }
  }
`;