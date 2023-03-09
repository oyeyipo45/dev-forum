import { NextPage } from 'next';
import Link from 'next/link';
import Logo from '../Images/Logo';
import { AiOutlineDashboard, AiOutlineContainer, AiOutlineTeam, AiOutlineMail } from 'react-icons/ai';

interface Props {}

const AdminNav: NextPage<Props> = (): JSX.Element => {
  return (
    <nav className='h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark'>
      <Link href='/admin' passHref legacyBehavior>
        <a className='flex items-center space-x-2 p-3'>
          <Logo className='fill-highlight-light dark:fill-highlight-dark   w-5 h-5' />
          <span className='fill-highlight-light dark:fill-highlight-dark text-xl font-semibold'>Admin</span>
        </a>
      </Link>

      <div className='space-y-4 mt-6'>
        <Link href='/admin' passHref legacyBehavior>
          <a className='flex items-center p-3 mb-1 hover:scale-[0.98] transition fill-highlight-light dark:fill-highlight-dark text-xl '>
            <AiOutlineDashboard size={24} />
            <span className='ml-4'>Dashboard</span>{' '}
          </a>
        </Link>
        <Link href='/admin/posts' passHref legacyBehavior>
          <a className='flex items-center p-3 mb-1 hover:scale-[0.98] transition fill-highlight-light dark:fill-highlight-dark text-xl '>
            <AiOutlineContainer size={24} />
            <span className='ml-4'>Posts</span>{' '}
          </a>
        </Link>
        <Link href='/admin/users' passHref legacyBehavior>
          <a className='flex items-center p-3 mb-1 hover:scale-[0.98] transition fill-highlight-light dark:fill-highlight-dark text-xl '>
            <AiOutlineTeam size={24} />
            <span className='ml-4'>Users</span>{' '}
          </a>
        </Link>
        <Link href='/admin/comments' passHref legacyBehavior>
          <a className='flex items-center p-3 mb-1 hover:scale-[0.98] transition fill-highlight-light dark:fill-highlight-dark text-xl '>
            <AiOutlineMail size={24} />
            <span className='ml-4'>Comments</span>{' '}
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
