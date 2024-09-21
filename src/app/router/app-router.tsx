import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
