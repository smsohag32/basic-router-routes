import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // nested route
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact></Contact>,
      },
    ],
  },

  // {
  //   path: "contacts/:contactId",
  //   element: <Contact></Contact>,
  // },
  // error element component
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
