import { createRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const baseRoot = basePath ? `${basePath}/` : '/';
const currentPath = window.location.pathname;

if (
  currentPath.endsWith('/') &&
  currentPath !== baseRoot &&
  currentPath.length > baseRoot.length
) {
  window.history.replaceState(
    window.history.state,
    '',
    `${currentPath.replace(/\/+$/, '')}${window.location.search}${window.location.hash}`,
  );
}

createRoot(document.getElementById('root')!, {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
}).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
