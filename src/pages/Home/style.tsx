import styled from "styled-components";

export const HomeContainer = styled.div`
  color: ${(props) => props.theme.color.themeColor};
  min-height: 360px;
`;

export const EmailLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
