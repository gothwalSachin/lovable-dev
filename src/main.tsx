import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Error from './components/Error.tsx';
import SignUp from './components/SignUp.tsx';
import LogIn from './components/Login.tsx';

const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: App,
        ErrorBoundary: Error,
    },
    {
        path: '/login',
        Component: LogIn,
    },
    {
        path: '/signup',
        Component: SignUp,
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
