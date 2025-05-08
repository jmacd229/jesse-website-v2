import {
  AnimationContextProvider,
  ThemeContextProvider,
} from '@jmacd229/design-system';
import '@jmacd229/design-system-theme/src/lib/theme/theme.css';
import '@jmacd229/design-system-theme/src/lib/theme/utilities.css';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeContextProvider>
      <AnimationContextProvider>
        <App />
      </AnimationContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
