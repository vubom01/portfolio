import React from 'react';
import NavLink from './NavLink';

type Link = {
  path: string;
  title: string;
};

type MenuOverlayProps = {
  links: Link[];
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;