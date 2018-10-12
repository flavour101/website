import React from "react";
import styled from "styled-components";

const StyledPageHeader = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 80px;
`

const StyledSection = styled.div`
    display: inline-block;
    width: calc(100% / 3);
    height: 100%;
    vertical-align: top;
    text-align: center;
`

const StyledSectionRight = styled(StyledSection)`
    text-align: right;
`

export default class PageHeader extends React.PureComponent {
    render() {
        return (
            <StyledPageHeader>
                <StyledSection>
                    {this.props.left ? this.props.left : ""}
                </StyledSection>
                <StyledSection>
                    {this.props.center ? this.props.center : ""}
                </StyledSection>
                <StyledSectionRight>
                    {this.props.right ? this.props.right : ""}
                </StyledSectionRight>
            </StyledPageHeader>
        )
    }
}