import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navbar.scss';

interface NavbarProps {
  shoWMenu?: () => void;
}

const Navbar: FC<NavbarProps> = ({ shoWMenu }) => {
 const {pathname}
 = useLocation() 
 
  return (
    <div className={pathname === "/" ? 'navbar__dark' : 'navbar__light'} onClick={shoWMenu}>    
      <NavLink to='/about' activeClassName='navbar__dark__selected'>
        About
      </NavLink>
      <NavLink to='/services' activeClassName='navbar__light__selected'>
        Services
      </NavLink>
      <NavLink to='/works' activeClassName='navbar__light__selected'>
        Works
      </NavLink>
      <NavLink to='/career' activeClassName='navbar__dark__selected'>
        Carrier
      </NavLink>
      <NavLink to='/contact' activeClassName='navbar__light__selected'>
        Contacts
      </NavLink>
    </div>
  );
};

export default Navbar;
