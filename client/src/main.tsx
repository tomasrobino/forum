import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import LeftBar from "./components/LeftBar.tsx";
import RightBar from "./components/RightBar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import {Board} from "./components/category/Board.tsx";
import {TopBar} from "./components/TopBar.tsx";
import {Post} from "./components/post/Post.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <div className="layoutDiv">
          <LeftBar />
          <App>
            <TopBar />
            <Outlet/>
          </App>
          <RightBar />
        </div>
      }
    >
      <Route path="/" element={<Dashboard />} />
      <Route path="/" children={[
        <Route path="/category/:categoryname" element={ <Board /> }/>,
        <Route path="category/:categoryname/post/:id" element={ <Post /> }/>
      ]}/>

    </Route>
  )
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
