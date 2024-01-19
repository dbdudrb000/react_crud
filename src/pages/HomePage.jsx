import React from "react";

import SearchBox from '../layout/SearchBox';
import WorryBox from '../layout/WorryBox';

const HomePage = () => {
    return (
        <main>
            <SearchBox attr="search-box" />
            <WorryBox attr="worry-box" />
        </main>
    );
}

export default HomePage;