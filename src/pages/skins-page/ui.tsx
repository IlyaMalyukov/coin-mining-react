import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Skins } from '@/entities';
import { HeadTitle, ROUTES } from '@/shared';
import { coinsStore } from '@/app/store';
import type { Skin } from '@/app/store';

const SkinsPage: React.FC = observer(() => {
  const navigate = useNavigate();

  const selectSkin = (skin: Skin) => {
    coinsStore.setSkin(skin);
    navigate(ROUTES.MAIN_PAGE);
  };

  return (
    <div className="page">
      <HeadTitle title="SKINS" isBackButtonVisible />
      <Skins onSelectSkin={selectSkin} />
    </div>
  );
});

export default SkinsPage;
