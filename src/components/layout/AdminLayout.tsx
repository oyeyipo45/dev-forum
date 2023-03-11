import { FC, ReactNode } from 'react';
import { AiOutlineContacts, AiOutlineContainer, AiOutlineDashboard, AiOutlineMail, AiOutlineTeam } from 'react-icons/ai';
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
      {children}
    </div>
  );
};

export default AdminLayout;
