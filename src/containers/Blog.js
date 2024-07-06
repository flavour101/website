import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Carousel } from '@harmelodic/react-ui-lib';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import Actions from '../redux/Actions';
import { StyledFadeInDiv } from '../components/Stylings';

export default function Blog() {
	const selectedBlog = useSelector(store => store.selectedBlog);
	const markdown = useSelector(store => store.markdown);

	const params = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(Middleware.fetchBlog(params.id));

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
			<Carousel
				x={16}
				y={9}
				images={selectedBlog.images && selectedBlog.images.map(image => image.source)} />
			<Article
				title={selectedBlog.title}
				src={selectedBlog.source}
				markdown={markdown}
			/>
		</StyledFadeInDiv>
	);
}
