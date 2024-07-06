import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Middleware from '../redux/Middleware';
import SquareEntry from '../components/SquareEntry';
import {
	StyledPageTitle,
	StyledSearch,
	StyledView,
} from '../components/Stylings';
import PageHeader from '../components/PageHeader';

export default function Blogs() {
	const [search, setSearch] = useState('');

	const blogs = useSelector(store => store.blogs);

	function onChangeSearch(event) {
		setSearch(event.target.value);
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(Middleware.fetchBlogs());
	});

	return (
		<div>
			<PageHeader
				left={
					<StyledSearch placeholder="Search" onChange={onChangeSearch} value={search} />
				}
				center={
					<StyledPageTitle>Blog</StyledPageTitle>
				}
			/>
			<StyledView>
				{
					blogs
						.filter(blog => blog.title && blog.title.toUpperCase().includes(search.toUpperCase()))
						.sort((a, b) => new Date(b.post_date).getTime() - new Date(a.post_date).getTime())
						.map(blog => {
							return (
								<SquareEntry
									key={blog.id}
									link={'/blog/' + blog.id}
									thumbnail={blog.thumbnail}
									title={blog.title}
									subTitle={new Date(blog.post_date).toLocaleDateString()}
								/>
							);
						})
				}
			</StyledView>
		</div>
	);
}
