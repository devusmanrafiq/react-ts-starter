import { Outlet } from 'react-router-dom';

import ScrollToTop from 'helpers/scroll-to-top';

import WithSuspense from 'routes/with-suspense';

import Footer from './footer';
import Header from './header';

function Layout() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <WithSuspense>
        <Outlet />
      </WithSuspense>

      <Footer />
    </>
  );
}

export default Layout;
