import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import Actions from '../redux/Actions';
import Carousel from '../components/Carousel';
import { StyledFadeInDiv } from '../components/Stylings';

export default function Blog(props) {
  const selectedBlog = useSelector(store => store.selectedBlog);
  const markdown = useSelector(store => store.markdown);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Middleware.fetchBlog(props.match.params.id));

    return function cleanup() {
      dispatch(Actions.setSelectedBlog({}));
      dispatch(Actions.setMarkdown(''));
    };
  }, []);

  useEffect(() => {
    if (selectedBlog.source) {
      dispatch(Middleware.fetchMarkdown(selectedBlog.source));
    }
  }, [selectedBlog.id]);

  return (
    <StyledFadeInDiv>
      <Carousel images={selectedBlog.images}/>
      <Article
        title={selectedBlog.title}
        src={selectedBlog.source}
        markdown={markdown}
      />
    </StyledFadeInDiv>
  );
}
