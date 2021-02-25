import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Middleware from '../redux/Middleware';
import PageHeader from '../components/PageHeader';
import ImageEntry from '../components/ImageEntry';
import {
  StyledPageTitle, StyledView,
} from '../components/Stylings';
import Overlay from '../components/Overlay';

export default function Gallery() {
  const [overlayImage, setOverlayImage] = useState(null);

  const gallery = useSelector(store => store.gallery);

  function openImage(src) {
    setOverlayImage(src);
  }

  function closeImage() {
    setOverlayImage(null);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Middleware.fetchGallery());
  }, []);

  return (
    <div>
      <PageHeader
        center={
          <StyledPageTitle>Gallery</StyledPageTitle>
        }
      />
      <StyledView>
        {
          gallery.map(image => (
            <ImageEntry
              key={image.id}
              // eslint-disable-next-line max-len
              thumbnail={image.source.substring(0, image.source.length - 4) + '-s' + image.source.substring(image.source.length -4)}
              onClick={() => openImage(image.source)}
            />
          ))
        }
      </StyledView>
      <Overlay src={overlayImage} hideOverlay={closeImage} />
    </div>
  );
}
