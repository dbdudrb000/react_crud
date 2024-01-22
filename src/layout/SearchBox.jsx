import React, {useState} from "react";

const SearchBox = (props) => {

    const [text, setText] = useState('');

    const searchHandle = (e) => {
        setText(e.target.value);
    }

    const searchSubmit = (e) => {
        props.worryCallbackFn('searchBox', text);
    }

    function enterkey(e) {
        if (e.key === 'Enter') {
            searchSubmit();
        }
    }

    return (
            <div className={props.attr}>
                <input type="search" 
                       value={text} 
                       placeholder="검색창"
                       onChange={searchHandle}
                       onKeyDown={enterkey}
                /> 
                <button onClick={searchSubmit}>검색</button>
            </div>
    );
}

export default SearchBox;