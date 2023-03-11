import AdminNav from '@/components/common/AdminNav';
import { NextPage } from 'next';
import Link from 'next/link';
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
];

const Admin: NextPage<Props> = (): JSX.Element => {
  return (
    <div>
      <AdminNav navItems={navItems} />
      
      <Link href='/admin/posts'>damilola</Link>
    </div>
  );
};

export default Admin;
