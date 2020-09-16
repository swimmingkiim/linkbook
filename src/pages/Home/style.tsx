import styled from "styled-components";

export const HomeContainer = styled.div`
  color: ${(props) => props.theme.color.themeColor};
  min-height: 360px;
`;

export const EmailLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    margin: 5% 0;
  }
`;

export const SocialLoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
