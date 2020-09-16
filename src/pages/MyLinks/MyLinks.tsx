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
  id: string;
  title: string;
  link: string;
  tags: Array<string>;
  createdAt: number;
}

const MyLinks: React.FC<MyLinksProps> = ({ user }) => {
  const [linkList, setLinkList] = useState<Array<LinkData>>([]);
  const [orderByTime, setOrderByTime] = useState<"desc" | "asc">("desc");
  const history = useHistory();

  const getAllLinksOfUser = useCallback((): (() => void) => {
    try {
      const unsubscribe = databaseService
        .collection("links")
        .where("creator", "==", user.uid)
        .orderBy("createdAt", "desc")
        .onSnapshot((querySnapshot) => {
          const userLinkList: Array<LinkData> = [];
          querySnapshot.forEach((doc) => {
            const { title, link, tags, createdAt } = doc.data();
            userLinkList.push({
              id: doc.id,
              title,
              link,
              tags,
              createdAt,
            });
          });
          setLinkList(userLinkList);
        });
      return unsubscribe;
    } catch (error) {
      console.log("Error while fetching linkList : " + error.toString());
      return () => null;
    }
  }, [user]);

  const onLogOut = async (): Promise<void> => {
    await AuthService.signOut();
    history.push("/");
  };

  const onChangeFilter = (): void =>
    setOrderByTime((prev) => (prev === "asc" ? "desc" : "asc"));

  const sortByTime = (a: LinkData, b: LinkData) =>
    orderByTime === "asc"
      ? a.createdAt - b.createdAt
      : b.createdAt - a.createdAt;

  useEffect((): (() => void) => {
    const unsubscribe = getAllLinksOfUser();
    return () => unsubscribe();
  }, [getAllLinksOfUser]);

  return (
    <S.MyLinksContainer>
      <Button type="button" displayContent="Log out" onClickFunc={onLogOut} />
      <Button
        type="button"
        displayContent={<Link to="/add-link">Add Link</Link>}
      />
      <Button
        type="button"
        displayContent={
          orderByTime === "asc" ? "Filter By New" : "Filter By Old"
        }
        onClickFunc={onChangeFilter}
      />
      <S.LinkListContainer>
        {linkList.sort(sortByTime).map(({ id, title, link, tags }) => (
          <LinkItem key={title} id={id} title={title} link={link} tags={tags} />
        ))}
      </S.LinkListContainer>
    </S.MyLinksContainer>
  );
};

export default MyLinks;
