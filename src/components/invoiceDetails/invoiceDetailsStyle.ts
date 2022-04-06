import styled from "styled-components";
import {ThemeType} from "../../types/themeTypes";

export const InvoiceDetailsStyled = styled.div<{ theme: ThemeType }>`
  .back {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.link.color}
  }
`
