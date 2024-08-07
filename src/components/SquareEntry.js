import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSquareEntry = styled(Link)`
    @keyframes fade-in-square {
        from {
            opacity: 0;
        }

        to {
            opacity: 0.95;
        }
    }
    animation: 800ms fade-in-square;

    display: inline-block;
    margin: 20px;
    width: 300px;
    max-height: 400px;
    border: solid 1px #ddd;
    border-radius: 0 0 5px 5px;
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    opacity: 0.95;
    transition: border 200ms, opacity 200ms;

    &:hover {
        border: solid 1px #444;
        opacity: 1;
    }
`;

const StyledThumbnail = styled.img`
    width: 300px;
    height: 300px;
`;

const StyledInfo = styled.div`
    margin: 15px;
    white-space: normal;
`;

const StyledTitle = styled.div`
    font-size: 18px;
    color: #333;
`;

const StyledSubTitle = styled.div`
    display: inline-block;
    margin-top: 5px;
    font-size: 16px;
    color: #888;
    font-style: italic;
`;

export default function SquareEntry(props) {
	return (
		<StyledSquareEntry to={props.link}>
			<StyledThumbnail src={props.thumbnail}/>
			<StyledInfo>
				<StyledTitle>{props.title}</StyledTitle>
				<StyledSubTitle>{props.subTitle}</StyledSubTitle>
			</StyledInfo>
		</StyledSquareEntry>
	);
}
