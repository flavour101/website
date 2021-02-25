import { useState, useEffect } from 'react';
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

export default function ImageEntry(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  function updateWindowDimensions() {
    setWindowWidth(window.innerWidth);
  }

  const size = windowWidth > 900 ? '250' : '175';
  return (
    <StyledImageEntry onClick={props.onClick} boxSize={size}>
      <StyledThumbnail src={props.thumbnail} boxSize={size} />
    </StyledImageEntry>
  );
}
