import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { coinsStore } from '@/app/store';
import { ROUTES } from '@/shared';
import { Tool } from './types.ts';
import './style.css';

const Toolbar = observer(() => {
  const navigate = useNavigate();

  const toLeaderboard = () => {
    navigate(ROUTES.LEADERBOARD_PAGE);
  };

  const toSkins = () => {
    navigate(ROUTES.SKINS_PAGE);
  };

  const boostPower = () => {
    if (coinsStore.isBoostPowerActive) {
      return;
    }

    coinsStore.boostPower();
  };

  const tools: Tool[] = [
    {
      name: 'boost',
      method: boostPower,
    },
    {
      name: 'leaderboard',
      method: toLeaderboard,
    },
    {
      name: 'skins',
      method: toSkins,
    },
  ];

  const stopBoostPower = () => {
    setTimeout(() => {
      coinsStore.stopBoostPower();
    }, 10000);
  };

  useEffect(() => {
    if (coinsStore.isBoostPowerActive) {
      stopBoostPower();
    }
  }, [coinsStore.isBoostPowerActive]);

  return (
    <div className="toolbar">
      {tools.map((tool: Tool) => (
        <div
          key={tool.name}
          className="toolbar__button"
          onClick={ tool.method }
        >
          <img
            className="toolbar__icon"
            src={`/src/assets/icons/${tool.name}.svg`}
            alt={tool.name}
          />
        </div>
      ))}
    </div>
  );
});

export default Toolbar;