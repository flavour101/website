import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Carousel } from '@harmelodic/react-ui-lib';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import Actions from '../redux/Actions';
import { StyledFadeInDiv } from '../components/Stylings';

export default function Recipe() {
  const selectedRecipe = useSelector(store => store.selectedRecipe);
  const markdown = useSelector(store => store.markdown);
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Middleware.fetchRecipe(params.id));

    return function cleanup() {
      dispatch(Actions.setSelectedRecipe({}));
      dispatch(Actions.setMarkdown(''));
    };
  }, []);

  useEffect(() => {
    if (selectedRecipe.source) {
      dispatch(Middleware.fetchMarkdown(selectedRecipe.source));
    }
  }, [selectedRecipe.id]);

  return (
    <StyledFadeInDiv>
      <Carousel
        x={16}
        y={9}
        images={selectedRecipe.images && selectedRecipe.images.map(image => image.source)} />
      <Article
        title={selectedRecipe.title}
        src={selectedRecipe.source}
        markdown={markdown}
      />
    </StyledFadeInDiv>
  );
}
