import React from "react";
import styled from "styled-components";

const StyledHomeImage = styled.img`
    width: 100%;
    height: 300px;
`

const StyledWelcomeText = styled.div`
    margin-top: 20px;
    padding: 60px;
    border: solid 1px #ddd;
    font-size: 18px;
    line-height: 24px;
    white-space: pre-line;
    font-family: Calibri, sans-serif;
`

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <StyledHomeImage />
                <StyledWelcomeText>
                    Example Text
                </StyledWelcomeText>
            </div>
        )
    }
}
