import React from 'react';
import { coinsStore } from '@/app/store';
import './style.css';

type EarnCoinProps = {
  onEarn: (profit: number) => void;
}

const EarnCoin: React.FC<EarnCoinProps> = ({onEarn}) => {
  const handleClick = () => {
    onEarn(coinsStore.profitPerTap);
  };

  return (
    <div className="wrapper">
      <div className="coin-wrapper" onClick={handleClick}>
        <img
          className="coin"
          src={`/src/assets/images/${coinsStore.activeSkin}.png`}
          alt="coin"
        />
      </div>
      <img
        className={coinsStore.isBoostPowerActive ? 'lightning lightning_active' : 'lightning'}
        src="/src/assets/images/lightning.png"
        alt="lightning"
      />
    </div>
  );
};

export default EarnCoin;