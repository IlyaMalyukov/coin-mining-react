import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Loader, HeadTitle } from '@/shared';
import { UserList } from '@/entities';
import type { Users } from '@/entities';
import { getPlayersAgent } from './api';

const TopPlayersPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [players, setPlayers] = useState<Users | undefined>(undefined);

  const fetchPlayers = async () => {
    // при использовании StrictMode может вызываться повторный рендеринг компонента
    // поэтому запрос отправляется каждый раз при рендеринге
    // в продакшене StrictMode не используется
    try {
      const agent = getPlayersAgent();
      const bestPlayers = await agent.getBestPlayers();
      setPlayers(bestPlayers);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="page">
      <HeadTitle title="TOP 10 PLAYERS" isBackButtonVisible />
      {isLoading ? <Loader /> : <UserList users={players} />}
      <br />
    </div>
  );
};

export default TopPlayersPage;