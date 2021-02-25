import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import Actions from '../redux/Actions';
import Carousel from '../components/Carousel';
import { StyledFadeInDiv } from '../components/Stylings';

export default function Recipe(props) {
  const selectedRecipe = useSelector(store => store.selectedRecipe);
  const markdown = useSelector(store => store.markdown);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Middleware.fetchRecipe(props.match.params.id));

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
      <Carousel images={selectedRecipe.images}/>
      <Article
        title={selectedRecipe.title}
        src={selectedRecipe.source}
        markdown={markdown}
      />
    </StyledFadeInDiv>
  );
}
