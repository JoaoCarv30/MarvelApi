

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Description } from "./pages/charDescription";
import { NotFound } from "./pages/notFound";
import { Layout } from "./components/layout";




const router = createBrowserRouter([


   {
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/description",
            element: <Description />,
        },
        {
            path: "*",
            element: <NotFound />,
    
        },
    
    ]

   }


])

export {router};






