import { NavLink } from 'react-router-dom';
import NavSection from './nav-section';

const topSection = [
  {
    path: 'dashboard',
    title: 'Dashboard',
  },
  {
    path: 'contact-us',
    title: 'Contact us',
  },
];

const bottomSection = [
  {
    path: 'user',
    title: 'User',
  },
  {
    path: 'settings',
    title: 'Settings',
  },
];

function SideBar() {
  return (
    <nav className='h-full max-h-svh bg-gray-500 flex flex-col justify-between'>
      <NavSection sections={topSection} />
      <NavSection sections={bottomSection} />
    </nav>
  );
}

export default SideBar;
