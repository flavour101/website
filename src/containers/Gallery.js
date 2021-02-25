import React from 'react';
import { Store } from '../redux/Store';
import Middleware from '../redux/Middleware';
import PageHeader from '../components/PageHeader';
import ImageEntry from '../components/ImageEntry';
import {
  StyledPageTitle, StyledView,
} from '../components/Stylings';
import Overlay from '../components/Overlay';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: Store.getState().gallery,
      overlayImage: null,
    };

    this.openImage = this.openImage.bind(this);
    this.closeImage = this.closeImage.bind(this);
  }

  openImage(src) {
    this.setState({
      overlayImage: src,
    });
  }

  closeImage() {
    this.setState({
      overlayImage: null,
    });
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        gallery: Store.getState().gallery,
      });
    });

    Store.dispatch(Middleware.fetchGallery());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <PageHeader
          center={
            <StyledPageTitle>Gallery</StyledPageTitle>
          }
        />
        <StyledView>
          {
            this.state.gallery.map((image) => {
              return (
                <ImageEntry
                  key={image.id}
                  thumbnail={image.source.substring(0, image.source.length - 4) + '-s' + image.source.substring(image.source.length -4)}
                  onClick={() => this.openImage(image.source)}
                />
              );
            })
          }
        </StyledView>
        <Overlay src={this.state.overlayImage} hideOverlay={this.closeImage} />
      </div>
    );
  }
}
