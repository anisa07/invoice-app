import styled from "styled-components";
import {desktopBreakpoint, tabletBreakpoint} from "./themes/styleConst";

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 5rem 2.5rem;

  @media (min-width: ${tabletBreakpoint}px) and (max-width: ${desktopBreakpoint-1}px) {
    padding: 5rem 7.5rem;
  }

  @media (min-width: ${desktopBreakpoint}px) {
    flex-direction: column;
    padding: 5rem 15rem;
  }
`;
