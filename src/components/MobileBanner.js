import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMobileBanner = styled.div`
    width: 100%;
    height: 100px;
    background-image: url("/images/banner.jpeg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

const StyledLogo = styled.img`
    height: 100%;
    user-select: none;
    transition: background-color 200ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        cursor: pointer;
    }
`

const StyledMenu = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: 100px;
    user-select: none;
    transition: background-color 200ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        cursor: pointer;
    }
`

export default class MobileBanner extends React.PureComponent {
    render() {
        return (
            <StyledMobileBanner>
                <Link to="/">
                    <StyledLogo src="/images/logo.svg" />
                </Link>
                <StyledMenu src="/images/menu.svg"/>
            </StyledMobileBanner>
        )
    }
}