import React from "react";

import SearchBox from '../layout/SearchBox';
import WorryBox from '../layout/WorryBox';
import WorryWriteList from '../layout/HomeWriteList';

const HomePage = (props) => {

    //const worryCheckedParam = location.state;

    
    console.log('props === ', props);

    return (
        <main>
            <SearchBox attr="search-box" />
            <WorryBox attr="worry-box" />
            <WorryWriteList attr="main-worry-write-box"/>
        </main>
    );
}

export default HomePage;