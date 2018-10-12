import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledFadeInDiv } from "./Stylings";

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

const StyledMenuButton = styled.img`
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

const StyledMenu = styled(StyledFadeInDiv)`
    display: ${props => props.menuOpen ? "inline-block" : "none"}
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #333;
`

const StyledMenuCloseButton = styled.img`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    width: 50px;
    height: 50px;

    &:hover {
        cursor: pointer;
    }
`

const StyledMenuItems = styled.div`
    margin: 60px 0;
    text-align: center;
`

const StyledMenuItem = styled(Link)`
    display: inline-block;
    padding: 20px;
    font-size: 30px;
    color: #333;
    text-align: center;
    text-decoration: none;

    &:hover, &:active {
        text-decoration: underline;
        cursor: pointer;
        background: #f3f3f3;
    }
`

export default class MobileBanner extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }

        this.changeMenuState = this.changeMenuState.bind(this);
    }

    changeMenuState() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return (
            <div>
                <StyledMobileBanner>
                    <Link to="/">
                        <StyledLogo src="/images/logo.svg" />
                    </Link>
                    <StyledMenuButton src="/images/menu.svg" onClick={this.changeMenuState} />
                </StyledMobileBanner>
                <StyledMenu menuOpen={this.state.menuOpen} fadeInTime="300ms">
                    <StyledMenuCloseButton src="/images/close.svg" onClick={this.changeMenuState} />
                    <StyledMenuItems>
                        <StyledMenuItem to="/reviews" onClick={this.changeMenuState}>Reviews</StyledMenuItem><br />
                        <StyledMenuItem to="/blog" onClick={this.changeMenuState}>Blog</StyledMenuItem><br />
                        <StyledMenuItem to="/recipes" onClick={this.changeMenuState}>Recipes</StyledMenuItem><br />
                        <StyledMenuItem to="/gallery" onClick={this.changeMenuState}>Gallery</StyledMenuItem><br />
                    </StyledMenuItems>
                </StyledMenu>
            </div>
        )
    }
}