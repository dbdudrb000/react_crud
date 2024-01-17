import React from "react";

import SearchBox from '../layout/SearchBox';
import WorryBox from '../layout/WorryBox';

const HomePage = () => {
    console.log('Home Component 들어왓슴');
    return (
        <main>
            <SearchBox attr="search-box" />
            <WorryBox attr="worry-box" />
        </main>
    );
}

export default HomePage;