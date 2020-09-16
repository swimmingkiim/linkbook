import styled from "styled-components";

interface UpdateFormProps {
  show: string;
}

export const LinkItemContainer = styled.li`
  width: 100%;
  width: 100%;
  background-color: #ffffff;
  padding: 5% 3%;
  border-radius: 1.5rem;
  position: relative;

  button {
    padding: 0.25%;
    margin: 2.5%;
    display: none;
  }
  &:hover {
    button {
      display: inline-block;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 25%;
  position: absolute;
  top: 5%;
  right: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  i {
    font-size: 100%;
  }
`;

export const Title = styled.a`
  color: black;
  font-weight: 700;
  font-size: 150%;
  display: block;
  margin-bottom: 5%;
`;

export const TagsContainer = styled.div`
  width: 100%;
  height: 100%;
  diplay: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  label + label {
    margin-left: 2%;
  }
`;

export const Tag = styled.label`
  color: ${(props) => props.theme.color.backgroundColor};
  background-color: ${(props) => props.theme.color.themeColor};
  font-size: 120%;
  padding: 1% 2.5%;
  border-radius: 0.25rem;
  display: inline-block;
  width: fit-content;
  margin-bottom: 2.5%;
`;

export const UpdateForm = styled.form`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  display: ${(props: UpdateFormProps) => props.show};
  background-color: ${(props) => props.theme.color.backgroundColor};

  button {
    display: inline-block;
    float: right;
  }

  input + input {
    margin-top: 5%;
  }

  i {
    font-size: 250%;
  }
`;
