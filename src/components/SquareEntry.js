import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const StyledSquareEntry = styled(Link)`
    @keyframes fade-in {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

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
    animation: 800ms fade-in;

    &:hover {
        border: solid 1px #444;
    }
`

const StyledThumbnail = styled.img`
    width: 300px;
    height: 300px;
`

const StyledInfo = styled.div`
    margin: 15px;
    white-space: normal;
`

const StyledTitle = styled.div`
    font-size: 18px;
    color: #333;
`

const StyledSubTitle = styled.div`
    display: inline-block;
    margin-top: 5px;
    font-size: 16px;
    color: #888;
    font-style: italic;
`

export default class SquareEntry extends React.Component {
    render() {
        return (
            <StyledSquareEntry to={this.props.link}>
                <StyledThumbnail src={this.props.thumbnail}/>
                <StyledInfo>
                    <StyledTitle>{this.props.title}</StyledTitle>
                    <StyledSubTitle>{this.props.subTitle}</StyledSubTitle>
                </StyledInfo>
            </StyledSquareEntry>
        )
    }
}