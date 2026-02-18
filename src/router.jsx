import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/home/Home";
import About from "./page/about/About";
import Users from "./page/users/Users";

const router =createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'users',
                element:<Users/>
            }
        ]
    }
])
export default router;