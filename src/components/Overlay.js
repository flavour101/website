import React from "react";
import styled from "styled-components";

const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
`

const StyledOverlayBackground = styled(StyledOverlay)`
    background: rgba(0, 0, 0, 0.6);
`

const StyledImage = styled.img`
    display: block;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    min-height: 200px;
    min-width: 200px;
    max-height: 90%;
    max-width: 90%;
    background: #fff;
`

export default class Overlay extends React.PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.src &&
                    <StyledOverlay>
                        <StyledOverlayBackground onClick={this.props.hideOverlay} />
                        <StyledImage src={this.props.src}/>
                    </StyledOverlay>
                }
            </div>
        )
    }
}