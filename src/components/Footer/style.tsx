import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 20%;
  ${(props) => props.theme.centerByFlex}
  flex-direction: column;
`;

export const Info = styled.h4`
  color: ${(props) => props.theme.color.themeColor};
  text-align: center;
`;
