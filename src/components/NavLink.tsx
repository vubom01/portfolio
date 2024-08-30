import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  href: string;
  title: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
