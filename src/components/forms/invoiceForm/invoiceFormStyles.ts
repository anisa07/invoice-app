import styled from "styled-components";
import {
    createInvoiceBackground,
    createInvoiceColor,
    disabledButton,
    formSectionText,
    mobileBreakpoint
} from "../../../themes/styleConst";
import {ThemeType} from "../../../types/themeTypes";

export const InvoiceFormStyled = styled.form<{ theme: ThemeType }>`
  h3 {
    margin: 1rem 0;
  }
  
  .text {
    color: ${formSectionText};
    margin: 1rem 0;
  }
  
  .fromInputs {
    width: 100%;
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    gap: 0.5rem;

    div {
      min-width: 0;
    }
    
    @media(min-width: ${mobileBreakpoint + 1}px) {
      grid-template-columns: repeat(3, auto);
    }
  }
  
  .date-payment {
    width: 100%;
    display: inline-grid;
    grid-template-columns: repeat(1, auto);
    gap: 0.5rem;

    @media(min-width: ${mobileBreakpoint + 1}px) {
      grid-template-columns: repeat(2, auto);
    }
  }
  
  .action {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
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
