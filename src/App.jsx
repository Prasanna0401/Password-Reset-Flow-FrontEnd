import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';

const routes = [
  {
    path: "/",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionStatusRevalidation: true,
    v7_skipActionErrorRevalidation: true,
  }
});

const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}

export default App;