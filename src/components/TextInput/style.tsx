import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 5%;
  font-size: ${(props) => props.theme.fontSize.desktop};
  border: none;

  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.mobile};
  }
`;
