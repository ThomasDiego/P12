import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard/:id",
    element: <App />,
  },
  {
    path: "/*",
    element: <div>404 NOT FOUND</div>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
