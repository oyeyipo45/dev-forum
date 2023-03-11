import AdminNav from '@/components/common/AdminNav';
import { FC } from 'react';
import { AiOutlineContacts, AiOutlineContainer, AiOutlineDashboard, AiOutlineMail, AiOutlineTeam } from 'react-icons/ai';

interface Props {}

const navItems = [
  {
    href: '/admin',
    icon: AiOutlineDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/posts',
    icon: AiOutlineContainer,
    label: 'Posts',
  },
  {
    href: '/admin/users',
    icon: AiOutlineTeam,
    label: 'Users',
  },
  {
    href: '/admin/comments',
    icon: AiOutlineMail,
    label: 'Comments',
  },
  {
    href: '/admin/contacts',
    icon: AiOutlineContacts,
    label: 'Contact',
  },
  {
    href: '/admin',
    icon: AiOutlineDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/posts',
    icon: AiOutlineContainer,
    label: 'Posts',
  },
  {
    href: '/admin/users',
    icon: AiOutlineTeam,
    label: 'Users',
  },
  {
    href: '/admin/comments',
    icon: AiOutlineMail,
    label: 'Comments',
  },
  {
    href: '/admin/contacts',
    icon: AiOutlineContacts,
    label: 'Contact',
  },
  {
    href: '/admin',
    icon: AiOutlineDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/posts',
    icon: AiOutlineContainer,
    label: 'Posts',
  },
  {
    href: '/admin/users',
    icon: AiOutlineTeam,
    label: 'Users',
  },
  {
    href: '/admin/comments',
    icon: AiOutlineMail,
    label: 'Comments',
  },
  {
    href: '/admin/contacts',
    icon: AiOutlineContacts,
    label: 'Contact',
  },
  {
    href: '/admin',
    icon: AiOutlineDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/posts',
    icon: AiOutlineContainer,
    label: 'Posts',
  },
  {
    href: '/admin/users',
    icon: AiOutlineTeam,
    label: 'Users',
  },
  {
    href: '/admin/comments',
    icon: AiOutlineMail,
    label: 'Comments',
  },
  {
    href: '/admin/contacts',
    icon: AiOutlineContacts,
    label: 'Contact',
  },
  {
    href: '/admin',
    icon: AiOutlineDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/posts',
    icon: AiOutlineContainer,
    label: 'Posts',
  },
  {
    href: '/admin/users',
    icon: AiOutlineTeam,
    label: 'Users',
  },
  {
    href: '/admin/comments',
    icon: AiOutlineMail,
    label: 'Comments',
  },
  {
    href: '/admin/contacts',
    icon: AiOutlineContacts,
    label: 'Contact',
  },
  {
    href: '/admin',
    icon: AiOutlineDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/posts',
    icon: AiOutlineContainer,
    label: 'Posts',
  },
  {
    href: '/admin/users',
    icon: AiOutlineTeam,
    label: 'Users',
  },
  {
    href: '/admin/comments',
    icon: AiOutlineMail,
    label: 'Comments',
  },
  {
    href: '/admin/contacts',
    icon: AiOutlineContacts,
    label: 'Contact',
  },
  {
    href: '/admin',
    icon: AiOutlineDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/posts',
    icon: AiOutlineContainer,
    label: 'Posts',
  },
  {
    href: '/admin/users',
    icon: AiOutlineTeam,
    label: 'Users',
  },
  {
    href: '/admin/comments',
    icon: AiOutlineMail,
    label: 'Comments',
  },
  {
    href: '/admin/contacts',
    icon: AiOutlineContacts,
    label: 'Contact',
  },
];

const index: FC<Props> = (props): JSX.Element => {
  return (
    <div className='relative'>
      <div className='relative md:fixed w-full md:w-6/12 min-h-screen inset-0'>
        <h1 className='absolute bottom-0 left-0 p-20 text-white text-8xl'>
          Benny
          <br />
          The Pup
        </h1>
        <img
          src='https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='w-full md:w-6/12 ml-auto'>
        <div className='bg-red-200 h-screen flex justify-center items-center flex-col p-10'>
          <h2 className='text-4xl mb-5'>Meet Benny</h2>
          <p className='mb-5'>I was born 20 May 2020</p>
        </div>
        <div className='bg-red-50 h-screen flex justify-center items-center flex-col p-10'>
          <h2 className='text-4xl mb-5'>I love food</h2>
          <p className='mb-5'>Bones, Pallets, and more!</p>
        </div>
        <div className='bg-red-200 h-screen flex justify-center items-center flex-col p-10'>
          <h2 className='text-4xl mb-5'>I love my humans</h2>
          <p className='mb-5'>My humans are super special to me, and I love them</p>
        </div>
      </div>
    </div>
  );
};

export default index;
