import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LeftBar from "./components/LeftBar.tsx";
import RightBar from "./components/RightBar.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <div className="layoutDiv">
          <LeftBar />
          <App />
          <RightBar />
        </div>
      }
    >
      <Route path="/" element={<div></div>} />
    </Route>
  )
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
