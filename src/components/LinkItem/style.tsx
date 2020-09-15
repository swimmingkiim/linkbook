import styled from "styled-components";

export const LinkItemContainer = styled.li`
  width: 100%;
  background-color: #ffffff;
  padding: 2.5%;
`;

export const Title = styled.a`
  color: black;
  font-weight: 700;
  font-size: 120%;
`;

export const TagsContainer = styled.div`
  width: 100%;
  diplay: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  label + label {
    margin-left: 2%;
  }
`;

export const Tag = styled.label`
  color: ${(props) => props.theme.color.backgroundColor};
  background-color: ${(props) => props.theme.color.themeColor};
  font-size: 80%;
`;
