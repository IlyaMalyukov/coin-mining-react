import { Balance } from '@/entities';
import { EarnCoin } from '@/features';
import { coinsStore } from '@/app/store';

const HomePage = () => {
  const earnCoins = (coinsAmount: number) => {
    coinsStore.updateTotalBalance(coinsAmount)
  };

  return (
    <div className="page">
      <h1 className="page__title">COIN MINING</h1>
      <Balance />
      <EarnCoin onEarn={ earnCoins } />
    </div>
  );
};

export default HomePage;