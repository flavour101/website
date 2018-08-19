import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const StyledSquareEntry = styled(Link)`
    display: inline-block;
    margin: 20px;
    width: 300px;
    max-height: 400px;
    border: solid 1px #ddd;
    border-radius: 0 0 5px 5px;
    cursor: pointer;
    text-align: left;
    transition: border 200ms;
    text-decoration: none;

    &:hover {
        border: solid 1px #444;
    }
`

const StyledThumbnail = styled.img`
    width: 300px;
    height: 300px;
`

export default class SquareEntry extends React.Component {
    render() {
        return (
            <StyledSquareEntry to={this.props.link}>
                <StyledThumbnail src={this.props.thumbnail}/>
                {this.props.children}
            </StyledSquareEntry>
        )
    }
}