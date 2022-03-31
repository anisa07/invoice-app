import styled from "styled-components";
import {ThemeType} from "../../../globalStyle";
import {
    expandArrowColor,
} from "../../../themes/styleConst";

export const InvoiceItemStyled = styled.div<{ theme: ThemeType }>`
  background-color: ${({theme}) => theme.colors.item.background};
  display: inline-grid;
  grid-template-columns: repeat(5, auto) 25px;
  padding: 2rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  width: 100%;

  span {
    align-self: center;
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
`;

