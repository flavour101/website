import { useEffect, useState } from 'react';
import DesktopBanner from '../components/DesktopBanner';
import MobileBanner from '../components/MobileBanner';

export default function Banner(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function updateWindowDimensions() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  });

  return (
    <div>
      {
        windowWidth > 900 ? <DesktopBanner /> : <MobileBanner />
      }
    </div>

  );
}
