import AdminLayout from '@/components/layout/AdminLayout';
import { NextPage } from 'next';

interface Props {}


const Posts: NextPage<Props> = (): JSX.Element => {
  return (
    <AdminLayout>
      <div>this is posts</div>
    </AdminLayout>
  );
};

export default Posts;
