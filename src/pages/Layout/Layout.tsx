import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { ReloadPrompt } from '../../components/ReloadPrompt';

function Layout() {
  return (
    <Fragment>
      <Navbar />

      <Outlet />
      <ReloadPrompt />
    </Fragment>
  );
}

export default Layout;
