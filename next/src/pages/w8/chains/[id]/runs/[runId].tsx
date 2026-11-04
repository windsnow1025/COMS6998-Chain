import {useRouter} from 'next/router';
import ChainShell from '@/components/chain/ChainShell';
import RunView from '@/components/chain/RunView';
import {Week8} from '@/components/chain/Weeks';

export default function Week8RunPage() {
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : null;
  const runId = typeof router.query.runId === 'string' ? router.query.runId : null;
  return (
    <ChainShell week={Week8} title="Run">
      {id && runId && <RunView key={runId} chainId={id} runId={runId}/>}
    </ChainShell>
  );
}
