import styled from "styled-components";
import {markButtonBackground, markButtonColor} from "../../themes/styleConst";

export const MarkButtonStyled = styled.button`
  background-color: ${markButtonBackground};
  color: ${markButtonColor};
  border-radius: 45px;
  padding: 0.5rem;
  width: 120px;
  text-transform: capitalize;
`;
