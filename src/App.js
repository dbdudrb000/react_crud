import './App.css';
import React from "react";
import TopBox from './header/top_box/TopBox';
import WorryList from './header/worry/worry_list/WorryList';

function App() {
  return (
    <React.Fragment>
      <div className='wrap'>
        <div className='inner'>
          <header>
            <div className='inner-top-box'>
              <TopBox />
            </div>
            <div className='worry-kind'>
              <WorryList />
            </div>
          </header>
          <div className='contents'>

          </div>
          <footer>

          </footer>

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
