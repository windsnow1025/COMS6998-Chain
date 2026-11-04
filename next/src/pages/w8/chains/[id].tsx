import {useRouter} from 'next/router';
import ChainShell from '@/components/chain/ChainShell';
import ChainView from '@/components/chain/ChainView';
import {Week8} from '@/components/chain/Weeks';

export default function Week8ChainPage() {
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : null;
  return (
    <ChainShell week={Week8} title="Chain">
      {id && <ChainView key={id} id={id}/>}
    </ChainShell>
  );
}
