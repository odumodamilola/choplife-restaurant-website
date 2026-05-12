import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
<<<<<<< HEAD
import { ThemeProvider } from 'next-themes';
=======
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<<<<<<< HEAD
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <App />
    </ThemeProvider>
=======
    <App />
>>>>>>> 4d9626b973700e92a42fe38f46dc12a8bbae86f3
  </StrictMode>,
);
