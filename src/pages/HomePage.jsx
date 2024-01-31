import React, { useState, useEffect} from "react";

import SearchBox from '../layout/SearchBox';
import WorryBox from '../layout/WorryBox';
import WorryWriteList from '../layout/HomeWriteList';
import userInfo from '../json/useInfo.json';
import Header from "../layout/Header";

const HomePage = (props) => {

    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

    // 카테고리 선택한 값
    const [worryChched, setWorryChched] = useState('all');
    // 검색한 문자열
    const [searchText, setSearchText] = useState('');
    // 나의 글만 확인
    const [myWriteCheck, setMyWriteCheck] = useState(false);

    const worryHandle = (gubn, newData) => {
        if(gubn === 'worryBox')  setWorryChched(newData);
        else if(gubn === 'searchBox') setSearchText(newData);
        else if(gubn === 'myWriteCheck') setMyWriteCheck(newData);
    }

    return ( 
        <React.Fragment>
            <Header attr={"header_wrap"} />
            <main>
                <SearchBox attr="search-box"  worryCallbackFn={worryHandle} />
                <WorryBox attr="worry-box" worryCallbackFn={worryHandle} checkedWorry={worryChched}/>
                <WorryWriteList attr="main-worry-write-box" worryCallbackFn={worryHandle} checkedWorry={worryChched} search={searchText}/>
            </main>
        </React.Fragment>
    );
}

export default HomePage;