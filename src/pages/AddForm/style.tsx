import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  min-height: 360px;
  padding: 2.5%;
  display: flex;
  flex-direction: column;

  input + input {
    margin-top: 5%;
  }
`;
