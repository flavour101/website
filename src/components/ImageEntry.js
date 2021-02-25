import React from 'react';
import styled from 'styled-components';

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
    width: ${props => props.boxSize}px;
    max-height: ${props => props.boxSize}px;
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
`;

const StyledThumbnail = styled.div`
    width: ${props => props.boxSize}px;
    height: ${props => props.boxSize}px;
    background-image: url("${props => props.src}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export default class ImageEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
    });
  }

  render() {
    const size = this.state.windowWidth > 900 ? '250' : '175';
    return (
      <StyledImageEntry onClick={this.props.onClick} boxSize={size}>
        <StyledThumbnail src={this.props.thumbnail} boxSize={size} />
      </StyledImageEntry>
    );
  }
}
