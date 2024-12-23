import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'

import Homepage from './routes/Homepage'
import PostListPage from './routes/PostListPage'
import Write from './routes/Write'
import LoginPage from './routes/LoginPage'
import RegisterPage from './routes/RegisterPage'
import SinglePostPage from './routes/SinglePostPage'
import MainLayout from './layouts/MainLayout'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey = {PUBLISHABLE_KEY}>
        <RouterProvider router = {router}/>
    </ClerkProvider>
)
