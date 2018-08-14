import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBanner = styled.div`
    width: 100%;
    height: 225px;
    background-image: url("/images/banner.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
`

const StyledMenu = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    text-align: center;
`

const StyledMenuItem = styled(Link)`
    display: inline-block;
    min-width: 225px;
    height: 100 %;
    color: #fff;
    text-align: center;
    line-height: 225px;
    font-size: 18px;
    vertical-align: top;
    transition: background-color 200ms;
    user-select: none;
    text-decoration: none;

    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        cursor: pointer;
    }
`

const StyledLogo = styled.img`
    height: 100%;
    user-select: none;

    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        cursor: pointer;
    }
`

export default class Banner extends React.Component {
    render() {
        return (
            <StyledBanner>
                <StyledMenu>
                    <StyledMenuItem to="">Reviews</StyledMenuItem>
                    <StyledMenuItem to="">Blog</StyledMenuItem>
                    <StyledLogo src="/images/logo.png" />
                    <StyledMenuItem to="">Recipes</StyledMenuItem>
                    <StyledMenuItem to="">Gallery</StyledMenuItem>
                </StyledMenu>
            </StyledBanner>
        )
    }
}