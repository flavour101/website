import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import { StyledFadeInDiv } from "../components/Stylings";

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
    constructor(props) {
        super(props);

        this.state = {
            markdown: Store.getState().markdown
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                markdown: Store.getState().markdown
            })
        })

        Store.dispatch(Middleware.fetchWelcomeScreenMarkdown());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <StyledFadeInDiv>
                <StyledHomeImage />
                <StyledWelcomeText>
                    <Article 
                        markdown={this.state.markdown}
                    />
                </StyledWelcomeText>
            </StyledFadeInDiv>
        )
    }
}
