import React, { useState, useEffect, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthService, databaseService } from "linkbookFirebase";
import Button from "components/Button/Button";
import LinkItem from "components/LinkItem/LinkItem";
import MaterialIcon from "components/MaterialIcon/MaterialIcon";
import TextInput from "components/TextInput/TextInput";
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
  const [searchString, setSearchString] = useState<string>("");
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

  const onSearchStringChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const {
      target: { value },
    } = e;
    setSearchString(value);
  };

  const isTagsHaveKeyword = (tags: Array<string>): boolean => {
    const lowerCaseTags = tags.map((tag) => tag.toLowerCase()).join(",");
    if (lowerCaseTags.includes(searchString)) return true;
    else return false;
  };

  useEffect((): (() => void) => {
    const unsubscribe = getAllLinksOfUser();
    return () => unsubscribe();
  }, [getAllLinksOfUser]);

  return (
    <S.MyLinksContainer>
      <S.ButtonContainer>
        <Button
          type="button"
          displayContent={<MaterialIcon name="power_settings_new" />}
          onClickFunc={onLogOut}
        />
        <Button
          type="button"
          displayContent={
            <Link to="/add-link">
              <MaterialIcon name="add_comment" />
            </Link>
          }
        />
        <Button
          type="button"
          displayContent={
            orderByTime === "asc" ? (
              <MaterialIcon name="call_made" />
            ) : (
              <MaterialIcon name="call_received" />
            )
          }
          onClickFunc={onChangeFilter}
        />
      </S.ButtonContainer>
      <S.SearchContainer>
        <TextInput
          type="text"
          name="searchString"
          value={searchString}
          placeholder="A Tag name"
          onChangeFunc={onSearchStringChange}
          isRequired={false}
        />
      </S.SearchContainer>
      <S.LinkListContainer>
        {linkList.length > 0 &&
          linkList.sort(sortByTime).map(({ id, title, link, tags }) => {
            if (searchString !== "" && isTagsHaveKeyword(tags) === false)
              return null;
            return (
              <LinkItem
                key={title}
                id={id}
                title={title}
                link={link}
                tags={tags}
              />
            );
          })}
      </S.LinkListContainer>
      {!Boolean(linkList.length) && (
        <S.EmptyListText>Save A New Link :D</S.EmptyListText>
      )}
    </S.MyLinksContainer>
  );
};

export default MyLinks;
