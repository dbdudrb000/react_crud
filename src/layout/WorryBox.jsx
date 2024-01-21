import React, { useState, useEffect} from "react";
import worryJson from "../json/worry.json";
import { Link } from "react-router-dom";

const WorryBox = (props) => {
    const [worry, setWorry] = useState('all');
    const [worryData, setWorryData] = useState(worryJson.worryList);

    useEffect(() => {
        sessionStorage.setItem('stgWorryList',JSON.stringify(worryData));
    }, []);

    const addData = () => {
        const newData = {"worryName" : "신규항목", "worryVal" : 'new', "code" : '16'};
        setWorryData((prevData) => [...prevData, newData]);
    }
    
    return (
        <React.Fragment>
            <div className="writing-div">
                <Link to="write">
                    <button>글쓰기</button> 
                </Link>
                <button onClick={addData}>data 추가</button> 
            </div>
{/* 테일윈드 */}
            <div className={props.attr}>
                <ul>
               {
                    worryData ? worryData.map((item, index) => {
                        return (
                            <li className={item.worryVal} key={item.code}>
                                {/* <Link to="" onClick={() => alert(`클릭한 메뉴는 [${item.worryName}] 입니다.`)}> {item.worryName}</Link> */}

                                <Link to={{ pathname: '/', state: item }}>{item.worryName}</Link>
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