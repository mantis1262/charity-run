import { useState } from 'react';
import HamburgerMenu from '../../Icons/HamburgerMenu/HamburgerMenu';
import scss from './MobileHeader.module.scss';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function MobileHeader() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <header className={scss.header}>
      <button
        onClick={() => setIsNavOpen(prev => !prev)}
        aria-label="Toggle Mobile Navigation"
        className={scss.btn}
      >
        <HamburgerMenu />
      </button>
      <MobileNavigation open={isNavOpen} />
    </header>
  );
}

export default MobileHeader;
