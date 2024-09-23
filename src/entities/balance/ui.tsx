import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { coinsStore } from '@/app/store';
import './style.css';

const BalanceComponent = () => {
  return useObserver(() => (
    <div className="balance">
      <span className="balance__total">{coinsStore.totalBalance}</span>
      <img
        className="balance__coin"
        src={`/src/assets/images/${coinsStore.activeSkin}.png`}
        alt="coin"
      />
    </div>
  ));
};

export default BalanceComponent;