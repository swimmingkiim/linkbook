import styled from "styled-components";

export const Button = styled.button`
  font-size: 150%;
  padding: 5%;
  background-color: ${(props) => props.theme.color.backgroundColor};
  color: ${(props) => props.theme.color.themeColor};
  border: none;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }

  & > a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
