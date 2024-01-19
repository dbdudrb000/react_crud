import React, { useState } from "react";
import worryJosn from "../json/worry.json";
import { Link } from "react-router-dom";

const WorryBox = (props) => {
    const [worry, setWorry] = useState('all');

    return (
        <React.Fragment>
            <div className="writing-div">
                <Link to="/write">
                    <button>글쓰기</button> 
                </Link>
            </div>
{/* 테일윈드 */}
            <div className={props.attr}>
                <ul>
                {
                    worryJosn.worryList.map((item, index) => {
                        return (
                            <li className={item.worryVal} key={item.code}>
                                <Link onClick={() => alert(`클릭한 메뉴는 [${item.worryName}] 입니다.`)}> {item.worryName}</Link>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </React.Fragment>
    );
}

export default WorryBox;