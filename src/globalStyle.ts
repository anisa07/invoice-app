import {createGlobalStyle} from "styled-components";
import {StatusEnum} from "./types/InvoiceEntity";
import {paidLabel, paidLabelBackground, pendingLabel, pendingLabelBackground} from "./themes/styleConst";

export interface ThemeType {
    // Todo fix types
    [key: string]: any
}

export const getLabelColor = (theme: ThemeType, status: StatusEnum) =>
    status === StatusEnum.DRAFT
        ? theme.colors.pendingLabel.text
        : status === StatusEnum.PENDING
        ? pendingLabel
        : paidLabel

export const getLabelBackgroundColor = (theme: ThemeType, status: StatusEnum) =>
    status === StatusEnum.DRAFT
        ? theme.colors.pendingLabel.background
        : status === StatusEnum.PENDING
        ? pendingLabelBackground
        : paidLabelBackground

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body, html {
    height: 100%;
    background: ${({theme}) => {
        return theme.colors.background
    }};
    color: ${({theme}) => theme.colors.text};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  
  button {
    font-weight: bolder;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    height: 100%;
  }
`

export default GlobalStyle;
