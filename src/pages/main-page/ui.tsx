import { Balance } from '@/entities';

const HomePage = () => {
  return (
    <div className="page">
      <h1 className="page__title">COIN MINING</h1>
      <Balance />
    </div>
  );
};

export default HomePage;