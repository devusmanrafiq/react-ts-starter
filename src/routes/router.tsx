import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { AuthPage, SignOut, useAuth } from 'auth';

import Layout from 'components/layout/layout';

import ErrorBoundary from 'routes/error-boundary';

import { PrivateRoutes } from './private-routes';
import WithSuspense from './with-suspense';

function AppRoutes() {
  const { currentUser } = useAuth();
  // const currentUser = true;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route path='logout' element={<SignOut />} />

        {currentUser ? (
          <>
            <Route path='/*' element={<PrivateRoutes />} />
            <Route path='auth/*' element={<Navigate to='/' />} />
          </>
        ) : (
          <>
            <Route path='auth/*' element={<AuthPage />} />
            <Route path='*' element={<Navigate to='/auth' />} />
          </>
        )}

        {/* Unknown path redirect */}
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    ),
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <WithSuspense>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </WithSuspense>
  );
}

export default AppRoutes;
