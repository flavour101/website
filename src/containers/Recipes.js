import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Middleware from '../redux/Middleware';
import SquareEntry from '../components/SquareEntry';
import {
  StyledPageTitle,
  StyledSearch,
  StyledView,
} from '../components/Stylings';
import PageHeader from '../components/PageHeader';

export default function Recipes() {
  const [search, setSearch] = useState('');

  const recipes = useSelector(store => store.recipes);

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Middleware.fetchRecipes());
  }, []);

  return (
    <div>
      <PageHeader
        left={
          <StyledSearch placeholder="Search" onChange={onChangeSearch} value={search} />
        }
        center={
          <StyledPageTitle>Recipes</StyledPageTitle>
        }
      />
      <StyledView>
        {
          recipes
              .filter(recipe => recipe.title &&
                recipe.title.toUpperCase().includes(search.toUpperCase()))
              .sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime())
              .map((recipe) => {
                return (
                  <SquareEntry
                    key={recipe.id}
                    link={'/recipes/' + recipe.id}
                    thumbnail={recipe.thumbnail}
                    title={recipe.title}
                    subTitle={new Date(recipe.post_date).toLocaleDateString()}
                  />
                );
              })
        }
      </StyledView>
    </div>
  );
}
