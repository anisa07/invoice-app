import styled from "styled-components";
import {desktopBreakpoint, headerBackground} from "../../themes/styleConst";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 65px;
  background-color: ${headerBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (min-width: ${desktopBreakpoint}px) {
    bottom: 0;
    left: 0;
    width: 65px;
    height: unset;
    flex-direction: column;
  }
`

export const InternalContainer = styled.div`
  display: flex;
  flex-direction: row; 
  margin-right: 25px;
  margin-bottom: 0;
  
  @media (min-width: ${desktopBreakpoint}px) {
    flex-direction: column;
    margin-bottom: 25px;
    margin-right: 0;
  }
`
