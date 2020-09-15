import React, { useState, useEffect, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthService, databaseService } from "linkbookFirebase";
import Button from "components/Button/Button";
import LinkItem from "components/LinkItem/LinkItem";
import * as S from "./style";

interface MyLinksProps {
  user: {
    displayName: string;
    photoURL: string;
    uid: string;
  };
}

interface LinkData {
  title: string;
  link: string;
  tags: Array<string>;
}

const MyLinks: React.FC<MyLinksProps> = ({ user }) => {
  const [linkList, setLinkList] = useState<Array<LinkData>>([]);
  const history = useHistory();

  const getAllLinksOfUser = useCallback(async (): Promise<void> => {
    try {
      const userLinkList: Array<LinkData> = [];
      const querySnapshot = await databaseService
        .collection("links")
        .where("creator", "==", user.uid)
        .get();
      querySnapshot.forEach((doc) => {
        const { title, link, tags } = doc.data();
        userLinkList.push({
          title,
          link,
          tags,
        });
      });
      setLinkList(userLinkList);
    } catch (error) {
      console.log("Error while fetching linkList : " + error.toString());
    }
  }, [user]);

  const onLogOut = async (): Promise<void> => {
    await AuthService.signOut();
    history.push("/");
  };

  useEffect(() => {
    getAllLinksOfUser();
  }, [getAllLinksOfUser]);

  return (
    <S.MyLinksContainer>
      <Button type="button" displayContent="Log out" onClickFunc={onLogOut} />
      <Button
        type="button"
        displayContent={<Link to="/add-link">Add Link</Link>}
      />
      <S.LinkListContainer>
        {linkList.map(({ title, link, tags }) => (
          <LinkItem key={title} title={title} link={link} tags={tags} />
        ))}
      </S.LinkListContainer>
    </S.MyLinksContainer>
  );
};

export default MyLinks;
