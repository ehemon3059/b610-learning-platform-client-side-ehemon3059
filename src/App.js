

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Blogs from './Components/Blogs/Blogs';
import Faq from './Components/FAQ/Faq';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

import SingleCard from './Components/SingleCard/SingleCard';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:"/courses",
          element: <Courses></Courses>
        },
        {
          path:"/courses/:id",
          element: <PrivateRoutes><SingleCard></SingleCard></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        
        {
          path:"/blogs",
          element: <Blogs></Blogs>
        },
        {
          path:"/faq",
          element: <Faq></Faq>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/signup",
          element: <SignUp></SignUp>
        }

      ]
    }

  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
