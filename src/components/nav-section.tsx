import React from 'react';
import { NavLink } from 'react-router-dom';

type NavSectionProps = {
  sections: {
    path: string;
    title: string;
  }[];
};

function NavSection({ sections }: NavSectionProps) {
  return (
    <ul>
      {sections.map(({ path, title }) => (
        <li
          key={path}
          className='m-2'
        >
          <NavLink to={path}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavSection;
