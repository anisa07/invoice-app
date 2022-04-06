import styled from "styled-components";
import {mobileBreakpoint, tabletBreakpoint} from "../../../themes/styleConst";
import {ThemeType} from "../../../types/themeTypes";

export const InvoiceDetailsHeaderStyled = styled.header<{ theme: ThemeType }>`
  display: inline-grid;
  gap: 0.25rem;
  column-gap: 0.5rem;
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.item.background};
  border-radius: 5px;
  margin-bottom: 0.5rem;
  width: 100%;

  @media (min-width: ${mobileBreakpoint + 1}px) {
    grid-template-columns: 2fr 3fr repeat(3, 1fr);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  button {
    justify-self: start;
    width: unset;

    @media (min-width: ${tabletBreakpoint + 1}px) {
      width: 120px;
    }
  }
`
