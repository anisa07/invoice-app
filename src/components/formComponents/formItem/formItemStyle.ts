import styled from "styled-components";
import {ThemeType} from "../../../types/themeTypes";
import { focusColor } from "../../../themes/styleConst";

export const StyledFormItem = styled.div<{ theme: ThemeType }>`
  width: 100%;
  margin-bottom: 0.5rem;
  display: inline-grid;
  grid-template-columns: 30% 20% 20% 10% 10%;
  gap: 0.25rem;
  
  .deleteItem {
    color: ${({theme}) => theme.colors.formInput.text};
  }
  
  span {
    align-self: center;
  }
`;

export const StyledInput = styled.input<{ theme: ThemeType }>`
  padding: 10px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.formInput.border};
  outline: none;
  color: ${({theme}) => theme.colors.formInput.text};
  background-color: ${({theme}) => theme.colors.formInput.background};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  
  &:focus {
    border-color: ${focusColor};
  }
`;
