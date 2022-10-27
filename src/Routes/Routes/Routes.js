import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import CourseCategory from '../../Pages/CourseCategory/CourseCategory/CourseCategory';
import CourseDetails from '../../Pages/CourseDetails/CourseDetails';
import Home from '../../Pages/Home/Home';

export  const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/courseCategory/:id',
                element: <CourseCategory></CourseCategory>,
            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
])