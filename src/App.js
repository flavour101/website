import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Banner from './containers/Banner';
import Home from './containers/Home';
import Reviews from './containers/Reviews';
import Review from './containers/Review';
import Blogs from './containers/Blogs';
import Blog from './containers/Blog';
import Recipes from './containers/Recipes';
import Recipe from './containers/Recipe';
import Gallery from './containers/Gallery';

const Content = styled.div`
    margin: 0 auto 50vh auto;
    width: 100%;
    max-width: 1080px;
`;

export default function App() {
	return (
		<div>
			<Banner />
			<Content>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/reviews" element={<Reviews />} />
					<Route exact path="/reviews/:id" element={<Review />} />
					<Route exact path="/blog" element={<Blogs />} />
					<Route exact path="/blog/:id" element={<Blog />} />
					<Route exact path="/recipes" element={<Recipes />} />
					<Route exact path="/recipes/:id" element={<Recipe />} />
					<Route exact path="/gallery" element={<Gallery />} />
				</Routes>
			</Content>
		</div>
	);
}
