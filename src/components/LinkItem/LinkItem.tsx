import React from "react";
import * as S from "./style";

interface LinkItemProps {
  title: string;
  link: string;
  tags: Array<string>;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, link, tags }) => {
  return (
    <S.LinkItemContainer>
      <S.Title href={link}>{title}</S.Title>
      <S.TagsContainer>
        {tags.map((tag, i) => (
          <S.Tag key={title + `tag${i}`}>{tag}</S.Tag>
        ))}
      </S.TagsContainer>
    </S.LinkItemContainer>
  );
};

export default LinkItem;
