import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { IconType } from 'react-icons';
import { RiMenuFoldFill } from 'react-icons/ri';
import Logo from '../images/Logo';

interface Props {
  navItems: { label: string; icon: IconType; href: string }[];
}

const AdminNav: NextPage<Props> = ({ navItems }): JSX.Element => {


  return (
    <nav className='h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark'>
      <Link href='/admin' className='flex items-center space-x-2 p-3'>
        <Logo className='fill-highlight-light dark:fill-highlight-dark   w-5 h-5' />
        <span className='fill-highlight-light dark:fill-highlight-dark text-xl font-semibold'>Admin</span>
      </Link>

      <div className='space-y-4 mt-6'>
        {navItems.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.label}
              className='flex items-center p-3 mb-1 hover:scale-[0.98] transition fill-highlight-light dark:fill-highlight-dark text-xl '
            >
              <item.icon size={24} />
              <span className='ml-4'>{item.label}</span>{' '}
            </Link>
          );
        })}
      </div>
      <button className='fill-highlight-light dark:fill-highlight-dark p-3 hover:scale-[0.98] transition'>
        <RiMenuFoldFill size={25} />
      </button>
    </nav>
  );
};

export default AdminNav;
