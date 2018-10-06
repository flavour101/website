import React from "react";
import styled from "styled-components";

const StyledCarousel = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; // 16:9 Ratio
    background-color: #efefef;
    `

const StyledWrapper = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0;
`

const StyledCarouselOverlay = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0; 
    left: 0; 
    right: 0;
`

const StyledCarouselOverlaySection = styled.div`
    display: inline-block;
    width: calc(100%/3);
    height: 100%;
    transition: background-color 200ms;

    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,0.05);
    }
`

const StyledImage = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-size: contain; 
    background-position: center;
`

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageInView: 0
        }

        this.onClickLeft = this.onClickLeft.bind(this);
        this.onClickMiddle = this.onClickMiddle.bind(this);
        this.onClickRight = this.onClickRight.bind(this);
    }

    onClickLeft() {
        let indexOfImageToMoveTo;
        if (this.state.imageInView === 0) {
            indexOfImageToMoveTo = this.props.images.length - 1
        }
        else {
            indexOfImageToMoveTo = this.state.imageInView - 1
        }
        this.setState({
            imageInView: indexOfImageToMoveTo
        })
    }

    onClickMiddle() {
        console.log("middle");
    }

    onClickRight() {
        let indexOfImageToMoveTo;
        if (this.state.imageInView === (this.props.images.length - 1)) {
            indexOfImageToMoveTo = 0;
        }
        else {
            indexOfImageToMoveTo = this.state.imageInView + 1;
        }
        this.setState({
            imageInView: indexOfImageToMoveTo
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.images &&
                    <StyledCarousel>
                        <StyledWrapper>
                            <StyledImage src={this.props.images && this.props.images[this.state.imageInView]} />
                            <StyledCarouselOverlay>
                                <StyledCarouselOverlaySection onClick={this.onClickLeft} />
                                <StyledCarouselOverlaySection onClick={this.onClickMiddle} />
                                <StyledCarouselOverlaySection onClick={this.onClickRight} />
                            </StyledCarouselOverlay>
                        </StyledWrapper>
                    </StyledCarousel>
                }
            </div>
        )
    }
}