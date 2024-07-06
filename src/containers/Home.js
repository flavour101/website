import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RatioImage } from '@harmelodic/react-ui-lib';
import styled from 'styled-components';
import Article from '../components/Article';
import Middleware from '../redux/Middleware';
import { StyledFadeInDiv } from '../components/Stylings';

const StyledWelcomeText = styled.div`
    padding: 2% 0;
    border-left: solid 1px #ddd;
    border-right: solid 1px #ddd;
    border-bottom: solid 1px #ddd;
    line-height: 24px;
    white-space: pre-line;
    font-family: Calibri, sans-serif;
    font-weight: 400;
    color: #333;
`;

export default function Home() {
	const markdown = useSelector(store => store.markdown);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(Middleware.fetchWelcomeScreenMarkdown());
	}, []);

	return (
		<StyledFadeInDiv>
			<RatioImage x={16} y={10} src="" backgroundColor="#000" src="/images/HomePhoto.jpg"/>
			<StyledWelcomeText>
				<Article
					markdown={markdown}
				/>
			</StyledWelcomeText>
		</StyledFadeInDiv>
	);
}
