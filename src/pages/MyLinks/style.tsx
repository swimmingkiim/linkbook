import styled from "styled-components";

export const MyLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.color.themeColor};
  min-height: 360px;

  a {
    text-decoration: none;
    font-weight: 700;
  }
`;

export const LinkListContainer = styled.ul`
  list-style-type: none;
  display: block;
  width: 100%;
`;
