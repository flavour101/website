import React from "react";
import styled from "styled-components";
import marked from "marked";

const StyledArticle = styled.div`
    font-size: 16px;
    max-width: 1000px;
    margin: 0 auto;
`

const StyledTitle = styled.h1`

`

export default class Article extends React.Component {
    render() {
        return (
            <StyledArticle>
                <StyledTitle>
                    {this.props.title}
                </StyledTitle>
                <div dangerouslySetInnerHTML={{
                    __html: marked(this.props.markdown)
                }} />
            </StyledArticle>
        )
    }
}