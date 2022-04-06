import styled from "styled-components";
import {
    detailListBackground,
    mobileBreakpoint,
    totalPriceBackground,
    totalPriceColor
} from "../../../themes/styleConst";

export const InvoiceDetailsListStyled = styled.div`
  .list {
    background-color: ${detailListBackground};
    padding: 1rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    width: 100%;
    display: none;

    @media (min-width: ${mobileBreakpoint + 1}px) {
      font-weight: lighter;
      font-size: 14px;
    }
  }
  
  .items {
    margin-bottom: 0.5rem;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    
    @media (min-width: ${mobileBreakpoint + 1}px) {
      grid-template-columns: 2fr repeat(3, 1fr);
    }

    span:not(:first-child) {
      justify-self: end;
    }
    
    .column {
      display: flex;
      flex-direction: column;
      font-weight: 600;
      
      span {
        font-weight: 200;
      }
      
      .bold {
        font-weight: 600;
      }
    }
  }
  
  .footer {
    background-color: ${totalPriceBackground};
    color: ${totalPriceColor};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  .big-bold-font {
    font-weight: 600;
    font-size: 20px;
  }
`

