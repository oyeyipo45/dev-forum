import AdminNav from '@/components/common/AdminNav';
import { FC } from 'react';

interface Props {}

const Admin: FC<Props> = (props): JSX.Element => {
  return <div><AdminNav /></div>;
};

export default Admin;