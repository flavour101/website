import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const boxSize = "250";
const StyledSquareEntry = styled(Link)`
    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 0.7;
        }
    }

    display: inline-block;
    margin: 3px;
    width: ${boxSize}px;
    max-height: ${boxSize}px;
    border: solid 1px #ddd;
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    opacity: 0.7;
    animation: 800ms fade-in;
    transition: border 200ms, opacity 200ms;

    &:hover {
        border: solid 1px #444;
        opacity: 1;
    }
`

const StyledThumbnail = styled.img`
    width: ${boxSize}px;
    height: ${boxSize}px;
`

export default class SquareEntry extends React.Component {
    render() {
        return (
            <StyledSquareEntry to={this.props.link}>
                <StyledThumbnail src={this.props.thumbnail}/>
            </StyledSquareEntry>
        )
    }
}