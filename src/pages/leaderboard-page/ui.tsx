import React, { useEffect, useState } from 'react';
import { Loader, HeadTitle } from '@/shared';
import { UserList } from '@/entities';
import type { Users } from '@/entities';
import { getPlayersAgent } from './api';

const TopPlayersPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [players, setPlayers] = useState<Users | undefined>(undefined);

  const fetchPlayers = async () => {
    try {
      const agent = getPlayersAgent();
      const bestPlayers = await agent.getBestPlayers();
      setPlayers(bestPlayers);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  });

  return (
    <div className="page">
      <HeadTitle title="TOP 10 PLAYERS" isBackButtonVisible />
      {isLoading ? <Loader /> : <UserList users={players} />}
      <br />
    </div>
  );
};

export default TopPlayersPage;