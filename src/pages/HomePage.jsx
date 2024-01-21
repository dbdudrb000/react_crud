import React, { useState, useEffect} from "react";

import SearchBox from '../layout/SearchBox';
import WorryBox from '../layout/WorryBox';
import WorryWriteList from '../layout/HomeWriteList';

const HomePage = (props) => {
    const [worryChched, setWorryChched] = useState('all');

    const worryHandle = (newData) => {
        setWorryChched(newData);
    }

    return (
        <main>
            <SearchBox attr="search-box" />
            <WorryBox attr="worry-box" worryCallbackFn={worryHandle} checkedWorry={worryChched}/>
            <WorryWriteList attr="main-worry-write-box" checkedWorry={worryChched}/>
        </main>
    );
}

export default HomePage;