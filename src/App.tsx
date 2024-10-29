import { LoginPage } from './pages/LoginPage/LoginPage';
import { MainPage } from './pages/MainPage/MainPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {  
  const config = createBrowserRouter([
    { 
      path: '/',
      element: <LoginPage />
    },
    { 
      path: '/main-page',
      element: <MainPage />
    },
    { 
      path: '/profile-page',
      element: <ProfilePage />
    },
    {
      path: '/reset-password',
      element: <ResetPasswordPage />
    },
    {
      path: '*',
      element: <div>404 - Page Not Found</div>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={config} /> 
    </div>
  );
}

export default App;
