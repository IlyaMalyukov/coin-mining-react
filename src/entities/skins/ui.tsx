import React from 'react';
import { observer } from 'mobx-react-lite';
import { coinsStore } from '@/app/store';
import type { Skin } from '@/app/store';
import './style.css';

const skins: Skin[] = [
  'bitcoin',
  'ethereum',
  'tether',
  'solana',
];

const Skins: React.FC<{ onSelectSkin: (skin: Skin) => void }> = observer(({ onSelectSkin }) => {
  const handleSkinClick = (skin: Skin) => {
    onSelectSkin(skin);
  };

  return (
    <div className="list">
      {skins.map((skin) => (
        <div
          key={skin}
          className={`skin-card ${skin === coinsStore.activeSkin ? 'skin-card_active' : ''}`}
          onClick={() => handleSkinClick(skin)}
        >
          <img
            className="skin-card__image"
            src={`/src/assets/images/${skin}.png`}
            alt={skin}
          />
          <span className="skin-card__name">{skin}</span>
        </div>
      ))}
    </div>
  );
});

export default Skins;