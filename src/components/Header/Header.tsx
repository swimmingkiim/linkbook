import React from "react";
import * as S from "./style";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
    </S.HeaderContainer>
  );
};

export default Header;
