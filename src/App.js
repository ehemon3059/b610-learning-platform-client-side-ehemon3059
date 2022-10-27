
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Blogs from './Components/Blogs/Blogs';
import Faq from './Components/FAQ/Faq';

function App() {
  const route = createBrowserRouter([

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
          path:"/blogs",
          element: <Blogs></Blogs>
        },
        {
          path:"/faq",
          element: <Faq></Faq>
        }

      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
