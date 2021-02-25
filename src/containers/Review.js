import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from '@harmelodic/react-ui-lib';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import Actions from '../redux/Actions';
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
      <Carousel
        x={16}
        y={9}
        images={selectedReview.images && selectedReview.images.map(image => image.source)} />
      <Article
        title={selectedReview.title}
        src={selectedReview.source}
        markdown={markdown}
      />
    </StyledFadeInDiv>
  );
}
