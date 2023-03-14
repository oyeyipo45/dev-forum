import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { AiOutlineContacts, AiOutlineContainer, AiOutlineDashboard, AiOutlineFileAdd, AiOutlineMail, AiOutlineTeam } from 'react-icons/ai';
import AdminNav from '../common/AdminNav';

interface Props {
  children: ReactNode;
}

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
];

const AdminLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className='flex'>
      <AdminNav navItems={navItems} />
      <div className='flex-1 p-2'>{children}</div>
      <Link
        href='/admin/create'
        className='bg-secondary-dark dark:bg-secondary-light
      text-primary dark:text-primary-dark fixed z-10 right-10 bottom-10 p-3 rounded-full
      hover:scale-90 shadow-sm transition'
          >
              <AiOutlineFileAdd size={24} />
      </Link>
    </div>
  );
};

export default AdminLayout;
