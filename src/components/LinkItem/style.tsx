import styled from "styled-components";

interface UpdateFormProps {
  show: string;
}

export const LinkItemContainer = styled.li`
  width: 100%;
  background-color: #ffffff;
  padding: 2.5%;

  button {
    padding: 0.25%;
    margin: 2.5%;
    float: right;
    display: none;
  }
  &:hover {
    button {
      display: block;
    }
  }
`;

export const Title = styled.a`
  color: black;
  font-weight: 700;
  font-size: 150%;
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
  font-size: 120%;
`;

export const Icon = styled.i`
  width: 1em;
  height: 1em;
  &:hover {
    cursor: pointer;
  }
`;

export const UpdateForm = styled.form`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props: UpdateFormProps) => props.show};
  background-color: ${(props) => props.theme.color.backgroundColor};

  button {
    display: block;
  }
`;
