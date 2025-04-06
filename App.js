import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './components/getuser/user';
import Add from './components/adduser/Add';
import Edit from './components/Updateuser/edit';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <User />,
      
    },
    {
      path: '/add',
      element: <Add />
    },
    {
      path: '/edit/:id',
      element: <Edit />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

