import styled from "styled-components";
import {desktopBreakpoint, tabletBreakpoint} from "../../../themes/styleConst";

export const InvoiceHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media (min-width: ${tabletBreakpoint}px) {
    margin-bottom: 3.5rem;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    margin-bottom: 5rem;
  }
`

export const InvoiceTitle = styled.div`
  display: flex;
  flex-direction: column;
  
  h1 {
    margin-bottom: 5px;
  }
  
  p {
    font-weight: 100;
    font-size: 12px;
  }
`

export const InvoiceAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

