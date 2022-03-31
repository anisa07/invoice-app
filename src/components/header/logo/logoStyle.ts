import styled from "styled-components";
import {logo1, logo2} from "../../../themes/styleConst";

export const LogoContainer = styled.div`
  width: 65px;
  height: 65px;
  border-top-right-radius: 25%;  
  border-bottom-right-radius: 25%; 
  background: linear-gradient(${logo1}, ${logo2});
`
