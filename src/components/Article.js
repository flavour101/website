import React from "react";
import styled from "styled-components";
import marked from "marked";

const StyledArticle = styled.div`
    font-size: 1em;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
`

const StyledTitle = styled.h1``

const StyledMarkdown = styled.div`
    white-space: normal;
    line-height: 1.8em;
`

export default class Article extends React.PureComponent {
    render() {
        return (
            <StyledArticle>
                {
                    this.props.title &&
                    <StyledTitle>
                        {this.props.title}
                    </StyledTitle>
                }
                <StyledMarkdown dangerouslySetInnerHTML={{
                    __html: marked(this.props.markdown)
                }} />
            </StyledArticle>
        )
    }
}