import React from "react";

const SearchBox = (props) => {
    return (
            <div className={props.attr}>
                <input type="search" placeholder="검색창"/> 
                <button >검색</button>
            </div>
    );
}

export default SearchBox;