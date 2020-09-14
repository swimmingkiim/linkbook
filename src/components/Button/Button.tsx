import React from "react";
import * as S from "./style";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  displayText: string;
  onClickFunc?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ type, displayText, onClickFunc }) => {
  return (
    <S.Button type={type} onClick={onClickFunc}>
      {displayText}
    </S.Button>
  );
};

export default Button;
