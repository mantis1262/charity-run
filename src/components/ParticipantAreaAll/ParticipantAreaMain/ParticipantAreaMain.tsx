import { StyledMain } from './StyledParticipantAreaMain';
import { ParticipantAreaNavigation } from '../ParticipantAreaNavigation/ParticipantAreaNavigation';
import { ParticipantAreaPhoto } from '../ParticipantAreaPhoto/ParticipantAreaPhoto';
// import { useState, useEffect } from 'react';

export const ParticipantAreaMain = () => {
  {
    /*  possibility to put photo inside box
  const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return screenSize;
  };

  const screenSize = useScreenSize();
  const isMobile = screenSize < 1350;
*/
  }

  return (
    <StyledMain as="section" id="participantMain">
      {/* mobile and normal view
      {isMobile ? (
        <ParticipantAreaNavigation>
          <ParticipantAreaPhoto />
        </ParticipantAreaNavigation>
      ) : (
        <>
          <ParticipantAreaPhoto />
          <ParticipantAreaNavigation />
        </>
      )}
    */}
      <ParticipantAreaPhoto />
      <ParticipantAreaNavigation />
    </StyledMain>
  );
};
