import styled from "styled-components";
import {createInvoiceBackground, createInvoiceColor, disabledButton, formSectionText} from "../../../themes/styleConst";
import {ThemeType} from "../../../types/themeTypes";

export const InvoiceFormStyled = styled.form<{ theme: ThemeType }>`
  h3 {
    margin: 1rem 0;
  }
  
  .text {
    color: ${formSectionText};
    margin: 1rem 0;
  }
  
  .submit {
    background: ${createInvoiceBackground};
    color: ${createInvoiceColor};
    width: 120px;
    padding: 0.5rem;
    position: relative;
    border-radius: 45px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    :disabled {
      background-color: ${disabledButton};
    }
  }
`
