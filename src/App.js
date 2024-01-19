import './App.css';
import React from "react";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";

import {Route, Routes, BrowserRouter, createBrowserRouter} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header attr={"header_wrap"} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="write" element={<WritePage />} />
        </Routes>
{
/*    
      <div className='wrap'>
        <div className='inner'>
          <div className='inner-top-box'>
            <TopBox />
          </div>
          <div className='worry-kind'>
            <WorryList />`
          </div>
        <div className='contents'>
 
        </div>
        <footer>

        </footer>
        </div>
      </div>
*/
}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
