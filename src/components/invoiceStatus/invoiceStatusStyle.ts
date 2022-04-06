import styled from "styled-components";
import {getLabelBackgroundColor, getLabelColor} from "../../globalStyle";
import {StatusEnum} from "../../types/InvoiceEntity";
import {ThemeType} from "../../types/themeTypes";

export const Status = styled.span<{ theme: ThemeType, status: StatusEnum }>`
  color: ${({theme, status}) => getLabelColor(theme, status)};
  text-transform: capitalize;
  font-weight: 600;
  min-width: 100px;
  text-align: center;
  padding: 0.5rem 0.25rem;
  background-color: ${({theme, status}) => getLabelBackgroundColor(theme, status)};
  border-radius: 5px;
  
  span {
    color: ${({theme, status}) => getLabelColor(theme, status)};
    margin-right: 5px;
  }
  
`
