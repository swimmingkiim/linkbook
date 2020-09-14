import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 20%;
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.color.themeColor};
  background-color: ${(props) => props.theme.color.backgroundColor};
`;
