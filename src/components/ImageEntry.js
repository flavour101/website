import React from "react";
import styled from "styled-components";

const boxSize = "250";
const StyledImageEntry = styled.div`
    @keyframes fade-in-image {
        from {
            opacity: 0;
        }

        to {
            opacity: 0.9;
        }
    }
    animation: 800ms fade-in-image;

    display: inline-block;
    margin: 3px;
    width: ${boxSize}px;
    max-height: ${boxSize}px;
    border: solid 1px #ddd;
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    opacity: 0.9;
    transition: border 200ms, opacity 200ms;

    &:hover {
        border: solid 1px #444;
        opacity: 1;
    }
`

const StyledThumbnail = styled.div`
    width: ${boxSize}px;
    height: ${boxSize}px;
    background-image: url("${props => props.src}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export default class ImageEntry extends React.PureComponent {
    render() {
        return (
            <StyledImageEntry onClick={this.props.onClick}>
                <StyledThumbnail src={this.props.thumbnail}/>
            </StyledImageEntry>
        )
    }
}