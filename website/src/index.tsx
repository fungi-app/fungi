import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import {PageNotFound} from "./pages/PageNotFound"
import {Index} from "./pages/index"
import {Login} from "./pages/login"


const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "login/",
          element: <Login />,
        },
      ],
    },
  ]);
  
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

root.render(
    <RouterProvider router={router} />
);
