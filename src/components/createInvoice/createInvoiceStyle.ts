import styled from "styled-components";
import {createInvoiceBackground, createInvoiceColor, desktopBreakpoint} from "../../themes/styleConst";

export const StyledCreateInvoice = styled.div`
  button {
    background: ${createInvoiceBackground};
    color: ${createInvoiceColor};
    border: none;
    outline: none;
    width: 120px;
    padding: 0.5rem;
    position: relative;
    border-radius: 45px;
    margin-left: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: ${desktopBreakpoint}px) {
      width: 150px;
      padding: 0.5rem;
    }
  }
  
  img {
    width: 35px;
    filter: invert(100%);
    margin-right: 0.55rem;
  }
`
