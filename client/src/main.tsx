import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer;
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import LeftBar from "./components/LeftBar.tsx";
import RightBar from "./components/RightBar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import {Board} from "./components/category/Board.tsx";
import {TopBar} from "./components/TopBar.tsx";
import {Post} from "./components/post/Post.tsx";
import {Login} from "./components/login/Login.tsx";
import {Register} from "./components/login/Register.tsx";
import {RecoverPassword} from "./components/login/RecoverPassword.tsx";

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
        <Route key="categoryKey" path="/category/:categoryname" element={ <Board /> }/>,
        <Route key="postKey" path="category/:categoryname/post/:id" element={ <Post /> }/>
      ]}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="recover-password" element={<RecoverPassword />} />
    </Route>
  )
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
