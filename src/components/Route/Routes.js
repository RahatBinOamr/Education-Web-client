import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import ErrorPage from "../ErrorPage ";
import Home from "../Home/Home";
import Courses from "../Pages/Courses";
import Category from "./Category/Category";

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
            element:<Courses></Courses>,
            loader:({params})=>fetch(`https://education-web-server-rahatbinoamr.vercel.app/courses/${params.id}`)
        },
    ]
}
])