import React from "react";
import * as S from "./style";

interface AddFormProps {
  user: object;
}

const AddForm: React.FC<AddFormProps> = ({ user }) => {
  return (
    <S.FormContainer>
      this will be the form for adding new link : D
    </S.FormContainer>
  );
};

export default AddForm;
