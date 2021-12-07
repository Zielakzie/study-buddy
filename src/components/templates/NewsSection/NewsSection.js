import React from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis consequat sapien, non ultricies quam aliquam egestas.',
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis consequat sapien, non ultricies quam aliquam egestas.',
    image: 'http://unsplash.it/500/400',
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis consequat sapien, non ultricies quam aliquam egestas.',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article" /> : null}
          </ContentWrapper>
          <Button isBig>click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
