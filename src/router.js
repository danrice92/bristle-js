import { createBrowserRouter } from 'react-router-dom';
import Landing from 'pages/Landing';
import SignUp from 'pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  }
]);

export default router;
