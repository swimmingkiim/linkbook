import React from "react";
import * as S from "./style";

interface TextInputProps {
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  type,
  placeholder,
  onChangeFunc,
  isRequired,
}) => {
  return (
    <S.Input
      {...{ type, name, value, placeholder }}
      required={isRequired}
      onChange={onChangeFunc}
    />
  );
};

export default TextInput;
