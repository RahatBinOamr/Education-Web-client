import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../Home/Home";
import Category from "./Category/Category";

export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
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
    ]
}
])