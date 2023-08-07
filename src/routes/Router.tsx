import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthRoute } from '../components/AuthRoute';
import { Dashboard, Layout, SignIn } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route
          path="/"
          element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
