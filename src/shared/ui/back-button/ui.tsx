import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/shared';
import './style.css';

type BackButtonProps = {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.MAIN_PAGE);
  };

  return (
    <div
      className={className ? `button ${className}` : 'button'}
      onClick={handleClick}
    >
      BACK TO TAP
    </div>
  );
};

export default BackButton;
