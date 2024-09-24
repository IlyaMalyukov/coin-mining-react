type ToolName = 'boost' | 'leaderboard' | 'skins';

type Tool = {
  name: ToolName;
  method: () => void;
};

export type { Tool };
