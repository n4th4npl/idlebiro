// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Navbar from "./components/Navbar";
import Artwork from "./routes/artwork";
import FullImagePage from "./routes/FullImagePage"; // Make sure the path is correct

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Root />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Navbar />
        <Artwork />
      </>
    ),
  },
  {
    path: "/image/", // You can use a parameter if you want to load specific images
    element: (
      <>
        <Navbar />
        <FullImagePage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
