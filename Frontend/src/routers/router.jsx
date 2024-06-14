import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleArt from "../shop/SingleArt";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import UploadAntiques from "../dashboard/UploadAntiques";
import DashBoard from "../dashboard/DashBoard";
import ManageAntiques from "../dashboard/ManageAntiques";
import EditAntiques from "../dashboard/EditAntiques";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
          children: [
               {
                    path: "/",
                    element: <Home />,
               },
               {
                    path: "/shop",
                    element: <Shop />,
               },
               {
                    path: "/about",
                    element: <About />,
               },
               {
                    path: "/blog",
                    element: <Blog />,
               },
               {
                    path: "/art/:id",
                    element: <SingleArt />,
                    loader:({params})=> fetch(`http://localhost:5000/art/${params.id}`)
               },
          ],
     },
     {
          path: '/admin/dashboard',
          element: <DashBoardLayout/>,
          children: [
               {
                    path:'/admin/dashboard',
                    element: <PrivateRoute><DashBoard/></PrivateRoute>
               },
               {
                    path:'/admin/dashboard/upload',
                    element: <UploadAntiques/>
               },
               {
                    path:'/admin/dashboard/manage',
                    element: <ManageAntiques/>
               },
               {
                    path:'/admin/dashboard/edit-antiques/:id',
                    element: <EditAntiques/>,
                    loader: ({params})=> fetch(`http://localhost:5000/art/${params.id}`)
               },
               
          ]
     },
     {
      path: 'sign-up',
      element: <Signup/>
     },
     {
          path:'login',
          element: <Login/>
     }
]);

export default router;
