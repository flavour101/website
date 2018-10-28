import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { Store } from "../redux/Store";
import Middleware from "../redux/Middleware";
import { StyledFadeInDiv } from "../components/Stylings";
import RatioImage from "../components/RatioImage";

const StyledWelcomeText = styled.div`
    padding: 2%;
    border-left: solid 1px #ddd;
    border-right: solid 1px #ddd;
    border-bottom: solid 1px #ddd;
    font-size: 16px;
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
                <RatioImage x="21" y="9" src="" backgroundColor="#eee"/>
                <StyledWelcomeText>
                    <Article 
                        markdown={this.state.markdown}
                    />
                </StyledWelcomeText>
            </StyledFadeInDiv>
        )
    }
}
