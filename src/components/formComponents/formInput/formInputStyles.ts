import styled from "styled-components";
import {desktopBreakpoint, focusColor, warnColor} from "../../../themes/styleConst";
import {ThemeType} from "../../../types/themeTypes";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  
  .label {
    margin-bottom: 0.5rem;
  }
`;

export const StyledInput = styled.input<{ theme: ThemeType, error: boolean }>`
  padding: 10px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({error, theme}) => error ? warnColor : theme.colors.formInput.border};
  outline: none;
  color: ${({error, theme}) => error ? warnColor : theme.colors.formInput.text};
  background-color: ${({theme}) => theme.colors.formInput.background};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  
  &:focus {
    border-color: ${focusColor};
  }
  
  @media(min-width:${desktopBreakpoint}) {
    padding: 10px 20px
  }

  ::-webkit-calendar-picker-indicator {
    filter: ${({theme}) => theme.name === "dark" ? 'invert(1)' : 'invert(0)'};
  }
`;

export const StyleSelect = styled.select<{ theme: ThemeType, error: boolean }>`
  padding: 11px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({error, theme}) => error ? warnColor : theme.colors.formInput.border};
  outline: none;
  color: ${({error, theme}) => error ? warnColor : theme.colors.formInput.text};
  background-color: ${({theme}) => theme.colors.formInput.background};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;

  &:focus {
    border-color: ${focusColor};
  }
`;

export const StyledWarning = styled.p`
  margin: 0.5rem 0 0;
  color: ${warnColor};
  font-size: 14px;
  height: 10px;
  font-style: italic;
  text-align: left;
`;
