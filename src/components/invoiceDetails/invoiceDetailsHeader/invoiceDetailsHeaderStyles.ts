import styled from "styled-components";
import {ThemeType} from "../../../globalStyle";

export const InvoiceDetailsHeaderStyled = styled.header<{ theme: ThemeType }>`
  display: inline-grid;
  grid-template-columns: 2fr 3fr repeat(3, 1fr);
  column-gap: 0.5rem;
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.item.background};
  border-radius: 5px;
  margin-bottom: 0.5rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
