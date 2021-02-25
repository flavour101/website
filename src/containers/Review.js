import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import Actions from '../redux/Actions';
import Carousel from '../components/Carousel';
import { StyledFadeInDiv } from '../components/Stylings';

export default function Review(props) {
  const selectedReview = useSelector(store => store.selectedReview);
  const markdown = useSelector(store => store.markdown);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Middleware.fetchReview(props.match.params.id));

    return function cleanup() {
      dispatch(Actions.setSelectedReview({}));
      dispatch(Actions.setMarkdown(''));
    };
  }, []);

  useEffect(() => {
    if (selectedReview.source) {
      dispatch(Middleware.fetchMarkdown(selectedReview.source));
    }
  }, [selectedReview.id]);

  return (
    <StyledFadeInDiv>
      <Carousel images={selectedReview.images}/>
      <Article
        title={selectedReview.title}
        src={selectedReview.source}
        markdown={markdown}
      />
    </StyledFadeInDiv>
  );
}
