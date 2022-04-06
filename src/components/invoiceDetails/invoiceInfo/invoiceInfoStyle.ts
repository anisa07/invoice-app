import styled from "styled-components";
import {mobileBreakpoint} from "../../../themes/styleConst";
import {ThemeType} from "../../../types/themeTypes";

export const InvoiceInfoStyled = styled.div<{ theme: ThemeType }>`
  background-color: ${({theme}) => theme.colors.item.background};
  border-radius: 5px;
  padding: 2rem;
  
  .data-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    
    .number {
      margin-bottom: 1rem;
    }
    
    @media (min-width: ${mobileBreakpoint + 1}px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .data-column {
    display: flex;
    flex-direction: column;
  }
  
  .data-half-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (min-width: ${mobileBreakpoint + 1}px) {
      width: 50%;
    }
  }
  
  .bold {
    font-weight: 600;
  }
`;
