import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";
import Search from "./pages/search/Search";

function App() {
  const router = createBrowserRouter([
    // Login and Registration
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "registration",
      element: <Registration />,
    },

    {
      path: "home",
      element: <Layout />,
      children: [
        // home
        {
          index: true,
          element: <Home />,
        },
        // user
        {
          path: "user",
          element: <User />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        // profile
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
