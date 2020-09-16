import React from "react";
import * as S from "./style";

interface MaterialIconProps {
  name: string;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ name }) => {
  return <S.Icon className="material-icons">{name}</S.Icon>;
};

export default MaterialIcon;
