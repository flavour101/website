import styled from 'styled-components';

const StyledPageHeader = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 80px;
`;

const StyledSection = styled.div`
    display: inline-block;
    width: calc(100% / 3);
    height: 100%;
    vertical-align: top;
    text-align: center;
`;

const StyledSectionRight = styled(StyledSection)`
    text-align: right;
`;

export default function PageHeader(props) {
	return (
		<StyledPageHeader>
			<StyledSection>
				{props.left ? props.left : ''}
			</StyledSection>
			<StyledSection>
				{props.center ? props.center : ''}
			</StyledSection>
			<StyledSectionRight>
				{props.right ? props.right : ''}
			</StyledSectionRight>
		</StyledPageHeader>
	);
}
