import { axios } from '@/shared';
import type { Users } from '@/entities';

export const getPlayersAgent = () => {
  const getBestPlayers = async (): Promise<Users> => {
    const { data } = await axios({
      method: 'GET',
      url: '/users'
    });

    return data;
  };

  return {
    getBestPlayers,
  };
};
