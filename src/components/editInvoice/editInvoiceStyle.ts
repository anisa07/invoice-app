import styled from "styled-components";
import {ThemeType} from "../../globalStyle";

export const EditInvoiceButton = styled.button<{ theme: ThemeType }>`
  color: ${({theme}) => theme.colors.editButton.text};
  background-color: ${({theme}) => theme.colors.editButton.background};
  border-radius: 45px;
  padding: 0.5rem;
  width: 120px;
`
