import React from "react";
import styled from "styled-components";
import Article from "../components/Article";

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
    font-weight: 400;
    color: #333;
`

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <StyledHomeImage />
                <StyledWelcomeText>
                    <Article 
                        markdown={"## Example Text"}
                    />
                </StyledWelcomeText>
            </div>
        )
    }
}
