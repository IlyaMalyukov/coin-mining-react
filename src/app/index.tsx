import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { AppRouter } from './router';

const isDevelopment = process.env.NODE_ENV === 'development';

const commonContent = (
  <div>
    <AppRouter />
    <ToastContainer />
  </div>
);

createRoot(document.getElementById('root')!).render(
  isDevelopment ? (
    <StrictMode>
      {commonContent}
    </StrictMode>
  ) : (
    commonContent
  )
)

// при использовании StrictMode может вызываться повторный рендеринг компонента
// поэтому запросы отправляются каждый раз при рендеринге
// в продакшене StrictMode не используется
