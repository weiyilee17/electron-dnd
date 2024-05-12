import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <div className='flex flex-col bg-gray-500 min-h-dvh justify-end'>
      <NavLink to='dashboard'>Dashboard</NavLink>
      <NavLink to='contact-us'>contact us</NavLink>
    </div>
  );
}

export default SideBar;
