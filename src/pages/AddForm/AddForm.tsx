import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { databaseService } from "linkbookFirebase";
import TextInput from "components/TextInput/TextInput";
import Button from "components/Button/Button";
import MaterialIcon from "components/MaterialIcon/MaterialIcon";
import * as S from "./style";

interface AddFormProps {
  user: {
    displayName: string;
    photoURL: string;
    uid: string;
  };
}

const AddForm: React.FC<AddFormProps> = ({ user }) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const [newTags, setNewTags] = useState<string>("");
  const [newLink, setNewLink] = useState<string>("");
  const history = useHistory();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value, name },
    } = e;
    switch (name) {
      case "newTitle":
        setNewTitle(value);
        break;
      case "newTags":
        setNewTags(value);
        break;
      case "newLink":
        setNewLink(value);
        break;
      default:
        break;
    }
  };

  const tagStringToArray = (rawString: string): Array<string> => {
    return rawString.split(",").map((str) => str.trim());
  };

  const onNewLinkSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      await databaseService.collection("links").add({
        title: newTitle,
        link: newLink,
        tags: tagStringToArray(newTags),
        creator: user.uid,
        bookmark: false,
        createdAt: Date.now(),
      });
      history.push("/");
    } catch (error) {
      console.log(`Document creation failed\nError : ${error.toString()}`);
    }
  };

  return (
    <S.FormContainer onSubmit={onNewLinkSubmit}>
      <TextInput
        type="text"
        name="newTitle"
        value={newTitle}
        onChangeFunc={onChangeInput}
        placeholder="Title"
        isRequired={true}
      />
      <TextInput
        type="text"
        name="newTags"
        value={newTags}
        onChangeFunc={onChangeInput}
        placeholder="Tags(comma between keywords)"
        isRequired={true}
      />
      <TextInput
        type="text"
        name="newLink"
        value={newLink}
        onChangeFunc={onChangeInput}
        placeholder="Link URL"
        isRequired={true}
      />
      <Button type="submit" displayContent={<MaterialIcon name="save_alt" />} />
    </S.FormContainer>
  );
};

export default AddForm;
