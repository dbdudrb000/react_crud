import './App.css';
import React from "react";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";

import {Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([  
      {
        path : "/",
        element : < HomePage/>
      },
      {
        path : "/write",
        element : < WritePage/>
      }
  ]);

  return (
    // <React.Fragment>
    //   <BrowserRouter>
    //   <Header attr={"header_wrap"} />
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="write" element={<WritePage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </React.Fragment>
    <RouterProvider router={router} />
  );
}

export default App;
