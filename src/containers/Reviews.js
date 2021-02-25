import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Middleware from '../redux/Middleware';
import Map from '../components/Map';
import SquareEntry from '../components/SquareEntry';
import {
  StyledPageTitle,
  StyledSearch,
  StyledButton,
  StyledView,
} from '../components/Stylings';
import PageHeader from '../components/PageHeader';

export default function Reviews(props) {
  const [displayAsMap, setDisplayAsMap] = useState(false);
  const [search, setSearch] = useState('');

  const reviews = useSelector(store => store.reviews);

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }

  function onChangeDisplay() {
    setDisplayAsMap(!displayAsMap);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Middleware.fetchReviews());
  }, []);

  return (
    <div>
      <PageHeader
        left={!displayAsMap &&
          <StyledSearch placeholder="Search" onChange={onChangeSearch} value={search} />
        }
        center={<StyledPageTitle>Reviews</StyledPageTitle>}
        right={
          <StyledButton onClick={onChangeDisplay}>
            View as {displayAsMap ? 'List' : 'Map'}
          </StyledButton>
        }
      />
      <StyledView>
        {
          displayAsMap ?
              <Map entries={reviews} /> :
              reviews
                  .filter(review => review.title &&
                    review.title.toUpperCase().includes(search.toUpperCase()))
                  .sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime())
                  .map((review) => {
                    return (
                      <SquareEntry
                        key={review.id}
                        link={'/reviews/' + review.id}
                        thumbnail={review.thumbnail}
                        title={review.title}
                        subTitle={new Date(review.post_date).toLocaleDateString()}
                      />
                    );
                  })
        }
      </StyledView>
    </div>
  );
}
