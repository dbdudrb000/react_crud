import React, { useState, useEffect} from "react";
import worryJson from "../json/worry.json";
import { Link } from "react-router-dom";

const WorryBox = (props) => {
    const [worry, setWorry] = useState('all');
    const [worryData, setWorryData] = useState(worryJson.worryList);

    useEffect(() => {
        sessionStorage.setItem('stgWorryList',JSON.stringify(worryData));
    }, []);

    const worryClick = (clickData) => {
        props.worryCallbackFn('worryBox', clickData);
    }
    
    return (
        <React.Fragment>
            <div className="writing-div">
                <Link to="write">
                    <button>글쓰기</button> 
                </Link>
            </div>

            <div className={props.attr}>
                <ul>
               {
                    worryData ? worryData.map((item, index) => {
                        return (
                            <li key={item.code} style={{ backgroundColor : props.checkedWorry === item.worryVal? '#444444' : '' }}>
                                <Link to="" onClick={() => worryClick(item.worryVal)}> {item.worryName}</Link>
                            </li>
                        );
                    }) : null
                } 
                </ul>
            </div>
        </React.Fragment>
    );
}

export default WorryBox;