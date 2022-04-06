import styled from "styled-components";
import {
    expandArrowColor, mobileBreakpoint,
} from "../../../themes/styleConst";
import {ThemeType} from "../../../types/themeTypes";

export const InvoiceItemStyled = styled.div<{ theme: ThemeType }>`
  background-color: ${({theme}) => theme.colors.item.background};
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  width: 100%;

  @media (min-width: ${mobileBreakpoint + 1}px) {
    grid-template-columns: repeat(5, auto) 25px;
  }

  span {
    align-self: center;
  }
  
  .name {
    justify-self: end;
    @media (min-width: ${mobileBreakpoint + 1}px) {
      justify-self: center;
    }
  }
  
  .number {
    font-weight: bold;
  }
  
  .price {
    font-weight: bold;
    font-size: 20px;
  }
  
  .arrow {
    font-weight: bold;
    color: ${expandArrowColor};
    cursor: pointer;
  }
  
  .left-column {
    display: inline-grid;
    grid-template-rows: repeat(2, auto);
  }
`;

