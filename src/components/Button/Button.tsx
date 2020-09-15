import React from "react";
import * as S from "./style";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  displayContent: string | React.FC | React.ReactChild;
  onClickFunc?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  displayContent,
  onClickFunc,
}) => {
  return (
    <S.Button type={type} onClick={onClickFunc}>
      {displayContent}
    </S.Button>
  );
};

export default Button;
