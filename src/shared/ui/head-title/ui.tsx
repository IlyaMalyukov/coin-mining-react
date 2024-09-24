import React from 'react';
import { BackButton } from '@/shared';

type HeadTitleProps = {
  title: string;
  isBackButtonVisible: boolean;
}

const HeadTitle: React.FC<HeadTitleProps> = ({ title, isBackButtonVisible }) => {
  return (
    <div className="header">
      {isBackButtonVisible ? <BackButton className="header__button" /> : null}
      <h1 className="header__title">{title}</h1>
    </div>
  );
};

export default HeadTitle;