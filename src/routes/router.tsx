import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { AuthPage, SignOut, useAuth } from 'auth';

import Layout from 'components/layout/layout';

import ErrorBoundary from 'routes/error-boundary';

import Home from 'pages/home/home';

import { PrivateRoutes } from './private-routes';
import WithSuspense from './with-suspense';

function AppRoutes() {
  const { currentUser } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route path='/home' element={<Home />} />

        <Route path='logout' element={<SignOut />} />

        {currentUser ? (
          <>
            <Route path='/*' element={<PrivateRoutes />} />
            <Route path='auth/*' element={<Navigate to='/dashboard' />} />
          </>
        ) : (
          <>
            <Route path='auth/*' element={<AuthPage />} />
            <Route path='*' element={<Navigate to='/auth' />} />
          </>
        )}

        {/* Unknown path redirect */}
        <Route path='*' element={<Navigate to='/home' />} />
      </Route>
    )
  );

  return (
    <WithSuspense>
      <RouterProvider router={router} />
    </WithSuspense>
  );
}

export default AppRoutes;
