import React from "react";
import styled from "styled-components";

const StyledArticle = styled.div`
    font-size: 16px;
`

export default class Article extends React.Component {
    render() {
        return (
            <StyledArticle>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.src}
                </div>
            </StyledArticle>
        )
    }
}