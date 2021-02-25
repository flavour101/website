import { useState } from 'react';
import styled from 'styled-components';
import RatioImage from './RatioImage';

const StyledCarouselOverlaySection = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
    background-image: url('${props => props.arrow}');
    background-repeat: no-repeat;
    background-size: 10%;
    background-position: ${props => props.position};
    opacity: 0;
    transition: opacity 400ms;
    
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export default function Carousel(props) {
  const [imageInView, setImageInView] = useState(0);

  function onClickLeft() {
    let indexOfImageToMoveTo;
    if (imageInView === 0) {
      indexOfImageToMoveTo = props.images.length - 1;
    } else {
      indexOfImageToMoveTo = imageInView - 1;
    }
    setImageInView(indexOfImageToMoveTo);
  }

  function onClickRight() {
    let indexOfImageToMoveTo;
    if (imageInView === (props.images.length - 1)) {
      indexOfImageToMoveTo = 0;
    } else {
      indexOfImageToMoveTo = imageInView + 1;
    }
    setImageInView(indexOfImageToMoveTo);
  }

  return (
    <div>
      {
        props.images && props.images.length > 0 &&
            <RatioImage
              x="16"
              y="9"
              src={props.images && props.images[imageInView].source}
              backgroundColor="#000">
              {
                props.images.length > 1 &&
                    <StyledCarouselOverlaySection
                      onClick={onClickLeft}
                      position="left"
                      arrow="/images/LeftArrow.svg"
                    />
              }
              {
                props.images.length > 1 &&
                    <StyledCarouselOverlaySection
                      onClick={onClickRight}
                      position="right"
                      arrow="/images/RightArrow.svg"
                    />
              }
            </RatioImage>
      }
    </div>
  );
}
