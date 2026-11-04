import ChainShell from '@/components/chain/ChainShell';
import ChainsView from '@/components/chain/ChainsView';
import {Week8} from '@/components/chain/Weeks';

export default function Week8ChainsPage() {
  return (
    <ChainShell week={Week8} title="Chains">
      <ChainsView/>
    </ChainShell>
  );
}
