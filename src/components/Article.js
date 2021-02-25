import marked from 'marked';
import styled from 'styled-components';

const StyledArticle = styled.div`
    font-size: 16px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
`;

const StyledTitle = styled.h1``;

const StyledMarkdown = styled.div`
    white-space: normal;
    line-height: 1.8em;
`;

export default function Article(props) {
  return (
    <StyledArticle>
      {
        props.title && <StyledTitle>{props.title}</StyledTitle>
      }
      <StyledMarkdown dangerouslySetInnerHTML={{
        __html: marked(props.markdown),
      }} />
    </StyledArticle>
  );
}
