import {GetServerSideProps} from 'next';
import {LatestWeek} from '@/components/chain/Weeks';

// The root is the latest week's tool
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {destination: LatestWeek.base, permanent: false},
});

export default function RootPage() {
  return null;
}
