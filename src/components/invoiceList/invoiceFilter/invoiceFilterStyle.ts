import styled from "styled-components";
import {ThemeType} from "../../../globalStyle";

export const InvoiceFilterStyled = styled.div<{ theme: ThemeType }>`
  select {
    text-transform: capitalize;
    background: transparent;
    color:  ${({theme}) => theme.colors.text};
    margin: 0;
    width: 100%;
    font-family: inherit;
    z-index: 1;
    border: none;
    padding: 0.25rem 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    line-height: 1.1;
  }
`
