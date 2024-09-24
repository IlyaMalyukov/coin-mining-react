import { Balance } from '@/entities';
import { EarnCoin } from '@/features';
import { coinsStore } from '@/app/store';
import { Toolbar } from '@/widgets';

const HomePage = () => {
  const handleEarnCoin = (coinsAmount: number) => {
    coinsStore.updateTotalBalance(coinsAmount)
  };

  return (
    <div className="page">
      <h1 className="page__title">COIN MINING</h1>
      <Balance />
      <EarnCoin onEarn={ handleEarnCoin } />
      <Toolbar />
    </div>
  );
};

export default HomePage;