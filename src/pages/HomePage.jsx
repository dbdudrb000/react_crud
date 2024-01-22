import React, { useState, useEffect} from "react";

import SearchBox from '../layout/SearchBox';
import WorryBox from '../layout/WorryBox';
import WorryWriteList from '../layout/HomeWriteList';

const HomePage = (props) => {
    // 카테고리 선택한 값
    const [worryChched, setWorryChched] = useState('all');
    // 검색한 문자열
    const [searchText, setSearchText] = useState('');

    const worryHandle = (gubn, newData) => {
        if(gubn === 'worryBox')  setWorryChched(newData);
        else if(gubn === 'searchBox') setSearchText(newData);
    }

    
    return ( 
        <main>
            <SearchBox attr="search-box"  worryCallbackFn={worryHandle} />
            <WorryBox attr="worry-box" worryCallbackFn={worryHandle} checkedWorry={worryChched}/>
            <WorryWriteList attr="main-worry-write-box" checkedWorry={worryChched} search={searchText}/>
        </main>
    );
}

export default HomePage;