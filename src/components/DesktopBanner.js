import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBanner = styled.div`
    width: 100%;
    height: 225px;
    background-image: url("/images/banner.jpeg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const StyledMenu = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    text-align: center;
`;

const StyledLogo = styled.img`
    height: 100%;
    user-select: none;
    transition: background-color 200ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        cursor: pointer;
    }
`;

export default function DesktopBanner() {
  return (
    <StyledBanner>
      <StyledMenu>
        <MenuItem link="/reviews" text="Reviews" image="/images/reviews.svg" />
        <MenuItem link="/blog" text="Blog" image="/images/blog.svg" />
        <Link to="/">
          <StyledLogo src="/images/logo.svg" />
        </Link>
        <MenuItem link="/recipes" text="Recipes" image="/images/recipes.svg" />
        <MenuItem link="/gallery" text="Gallery" image="/images/gallery.svg" />
      </StyledMenu>
    </StyledBanner>
  );
}

const StyledMenuItemContent = styled.div`
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;

const StyledMenuItemText = styled.div`
    color: #fff;
    font-size: 18px;
    user-select: none;
    text-decoration: none;
`;

const pictureSize = '70';
const StyledMenuItemPicture = styled.img`
    display: block;
    margin: 0 auto;
    max-width: ${pictureSize}px;
    width: 100%;
    height: 0;
    transition: height 200ms;
`;

const StyledMenuItem = styled(Link)`
    display: inline-block;
    max-width: 225px;
    width: 12%;
    height: 100%;
    vertical-align: top;
    text-align: center;
    transition: background-color 200ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        cursor: pointer;
    }

    &:hover ${StyledMenuItemPicture} {
        height: ${pictureSize}px;
    }
`;


function MenuItem(props) {
  return (
    <StyledMenuItem to={props.link}>
      <StyledMenuItemContent>
        <StyledMenuItemPicture src={props.image} />
        <StyledMenuItemText>{props.text}</StyledMenuItemText>
      </StyledMenuItemContent>
    </StyledMenuItem>
  );
}
