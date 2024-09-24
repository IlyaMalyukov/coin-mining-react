import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage, LeaderboardPage } from '@/pages';
import { ROUTES } from '@/shared';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
      <Route path={ROUTES.LEADERBOARD_PAGE} element={<LeaderboardPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
