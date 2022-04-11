import styled from "styled-components";
import {ThemeType} from "../../../types/themeTypes";

export const StyledFormItemList = styled.div<{ theme: ThemeType }>`
  margin-bottom: 1rem;
  
  .headerList {
    width: 100%;
    margin: 1rem 0;
    display: inline-grid;
    grid-template-columns: 30% 20% 20% 10% 10%;
    font-size: 12px;
    gap: 0.25rem;
  }

  .addItem {
    width: 100%;
    border-radius: 45px;
    padding: 0.5rem;
    color: ${({theme}) => theme.colors.text};
    background: ${({theme}) => {
      return theme.colors.item.background
    }};
  }

  input {width: unset}
`;
