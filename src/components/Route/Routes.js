import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../Blog";
import ErrorPage from "../ErrorPage ";
import Home from "../Home/Home";
import Login from "../Login";
import Category from "../Pages/Category/Category";
import Register from "../Pages/Category/Register";
import Courses from "../Pages/Courses";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
           
            element:<Home></Home>
        },
        {
            path:'/home',
           
            element:<Home></Home>
        },

        {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`https://education-web-server-rahatbinoamr.vercel.app/CoursesCategory/${params.id}`)
        },
        {
            path:'/courses/:id',
            element:<PrivateRoute><Courses></Courses></PrivateRoute>,
            loader:({params})=>fetch(`https://education-web-server-rahatbinoamr.vercel.app/courses/${params.id}`)
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ]
}
])