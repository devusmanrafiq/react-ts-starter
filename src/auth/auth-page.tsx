import { Outlet, Route, Routes } from 'react-router-dom';

import SignIn from 'auth/sign-in';
import SignUp from 'auth/sign-up';

function AuthPage() {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route index element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export { AuthPage };
