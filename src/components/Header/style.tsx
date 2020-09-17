import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  ${(props) => props.theme.centerByFlex}
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.color.themeColor};
  background-color: ${(props) => props.theme.color.backgroundColor};
`;

export const Logo = styled.img`
  height: 100%;
`;
