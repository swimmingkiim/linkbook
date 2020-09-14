import React from "react";
import * as S from "./style";
import Button from "components/Button/Button";
import { AuthService } from "linkbookFirebase";
import { useHistory } from "react-router-dom";

interface MyLinksProps {
  user: object;
}

const MyLinks: React.FC<MyLinksProps> = ({ user }) => {
  const history = useHistory();
  const onLogOut = async (): Promise<void> => {
    await AuthService.signOut();
    history.push("/");
  };
  return (
    <S.MyLinksContainer>
      <Button type="button" displayText="Log out" onClickFunc={onLogOut} />
    </S.MyLinksContainer>
  );
};

export default MyLinks;
