import styled from "styled-components";
import {mobileBreakpoint, popupContainerBackground, tabletBreakpoint} from "../../themes/styleConst";
import {ThemeType} from "../../types/themeTypes";

export const ModalContainer = styled.div<{ theme: ThemeType }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: ${popupContainerBackground};

  .content {
    padding: 2rem;
    position: absolute;
    background: ${({theme}) => {
        return theme.colors.background
    }};
    color: ${({theme}) => theme.colors.text};
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    
    .close {
      position: absolute;
      font-size: 24px;
      font-weight: 500;
      right: 1.5rem;
      top: 1.5rem;
      color: ${({theme}) => theme.colors.text};
      border: 1px solid ${({theme}) => theme.colors.text};
      padding: 0.20rem 0.5rem;
      border-radius: 50%;
    }
    
    @media (min-width: ${mobileBreakpoint + 1}px) and (max-width: ${tabletBreakpoint}px) {
      width: 75%;
    }

    @media (min-width: ${tabletBreakpoint + 1}px) {
      left: 0;
      right: 35%;
      top: 0;
      bottom: 0;
      margin: auto;
      width: unset;
    }
  }
`;

