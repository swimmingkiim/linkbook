import styled from "styled-components";

export const OuterContainer = styled.div`
  ${(props) => props.theme.centerByFlex}
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.backgroundColor};
`;

export const InnerContainer = styled.main`
  width: 360px;
  min-height: 550px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
