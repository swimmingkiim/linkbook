import React, { useState } from "react";
import * as S from "./style";
import { databaseService } from "linkbookFirebase";
import TextInput from "components/TextInput/TextInput";
import Button from "components/Button/Button";

interface LinkItemProps {
  id: string;
  title: string;
  link: string;
  tags: Array<string>;
}

const LinkItem: React.FC<LinkItemProps> = ({ id, title, link, tags }) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [updatedTitle, setUpdatedTitle] = useState<string>(title);
  const [updatedLink, setUpdatedLink] = useState<string>(link);
  const [updatedTags, setUpdatedTags] = useState<string>(tags.join(","));
  const onDeleteLinkItem = async (): Promise<void> => {
    try {
      if (
        window.confirm("Are you sure? After deletion, you can't undo that.")
      ) {
        await databaseService.collection("links").doc(id).delete();
      }
    } catch (error) {
      window.alert(
        "There was an error while deletion, please try again after a while"
      );
    }
  };

  const tagStringToArray = (rawString: string): Array<string> => {
    return rawString.split(",").map((str) => str.trim());
  };

  const onShowUpdate = () => setIsUpdate((prev) => !prev);

  const onUpdateSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await databaseService
      .collection("links")
      .doc(id)
      .update({
        title: updatedTitle,
        link: updatedLink,
        tags: tagStringToArray(updatedTags),
        createdAt: Date.now(),
      });
    setIsUpdate(false);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value, name },
    } = e;
    switch (name) {
      case "updatedTitle":
        setUpdatedTitle(value);
        break;
      case "updatedLink":
        setUpdatedLink(value);
        break;
      case "updatedTags":
        setUpdatedTags(value);
        break;
      default:
        break;
    }
  };
  return (
    <S.LinkItemContainer>
      <Button
        type="button"
        displayContent={
          <S.Icon className="material-icons">delete_forever</S.Icon>
        }
        onClickFunc={onDeleteLinkItem}
      />
      <Button
        type="button"
        displayContent={<S.Icon className="material-icons">create</S.Icon>}
        onClickFunc={onShowUpdate}
      />
      <S.Title href={link} target="_blank">
        {title}
      </S.Title>
      <S.TagsContainer>
        {tags.map((tag, i) => (
          <S.Tag key={title + `tag${i}`}>{tag}</S.Tag>
        ))}
      </S.TagsContainer>
      <S.UpdateForm
        onSubmit={onUpdateSubmit}
        show={isUpdate ? "block" : "none"}
      >
        <TextInput
          type="text"
          name="updatedTitle"
          value={updatedTitle}
          onChangeFunc={onChangeInput}
          isRequired={true}
        />
        <TextInput
          type="text"
          name="updatedLink"
          value={updatedLink}
          onChangeFunc={onChangeInput}
          isRequired={true}
        />
        <TextInput
          type="text"
          name="updatedTags"
          value={updatedTags}
          onChangeFunc={onChangeInput}
          isRequired={true}
        />
        <Button
          type="submit"
          displayContent={<S.Icon className="material-icons">save_alt</S.Icon>}
        />
      </S.UpdateForm>
    </S.LinkItemContainer>
  );
};

export default LinkItem;
