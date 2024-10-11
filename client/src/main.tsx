import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Buffer } from 'buffer'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider} from "react-router-dom";
import LeftBar from "./components/LeftBar.tsx";
import Dashboard from "./components/Dashboard.tsx";
import {Board} from "./components/category/Board.tsx";
import {TopBar} from "./components/TopBar.tsx";
import {Post} from "./components/post/Post.tsx";
import {Login} from "./components/login/Login.tsx";
import {Register} from "./components/login/Register.tsx";
import {RecoverPassword} from "./components/login/RecoverPassword.tsx";
import AuthProvider from "./hooks/AuthProvider.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import {Messages} from "./components/profile/Messages.tsx";
import {Profile} from "./components/profile/Profile.tsx";
import {Search} from "./components/Search.tsx";
import {WriteReply} from "./components/post/WriteReply.tsx";
globalThis.Buffer = Buffer;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={
                <div className="layoutDiv">
                    <AuthProvider>
                        <LeftBar />
                        <App>
                            <TopBar />
                                <Outlet/>
                        </App>
                    </AuthProvider>
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
            <Route path="/search" element={<Search />} />
            {/*List all private routes here*/}
            <Route element={<PrivateRoute/>}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/messages" element={<Messages />} />
                <Route path="category/:categoryname/post/:id/reply" element={<WriteReply />} />
            </Route>
        </Route>
    )
);


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
