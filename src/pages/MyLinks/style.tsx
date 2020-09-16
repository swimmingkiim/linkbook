import styled from "styled-components";

export const MyLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.color.themeColor};
  min-height: 360px;
  position: relative;

  a {
    text-decoration: none;
    font-weight: 700;
  }
`;

export const LinkListContainer = styled.ul`
  list-style-type: none;
  display: block;
  width: 100%;

  li + li {
    margin-top: 5%;
  }
`;

export const ButtonContainer = styled.div`
  display: block;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;

  button {
    flex: 1;
  }
`;

export const EmptyListText = styled.h3`
  width: fit-content;
  font-size: 150%;
  color: ${(props) => props.theme.color.themeColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
