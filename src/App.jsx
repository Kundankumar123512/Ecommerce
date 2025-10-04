// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MainLayout from "./Layout/MainLayout";
import NotFound from "../NotFound";

// Component that conditionally redirects based on screen size
function RootRedirect() {
  const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
  return <Navigate to={isMobile ? "/hero" : "/about"} replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Root route now uses RootRedirect
      { index: true, element: <RootRedirect /> },

      { path: "hero", element: <HeroSection /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Project /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
