import React, { useState } from "react";
import worryJosn from "../json/worry.json";

const WorryBox = (props) => {
    const [worry, setWorry] = useState('all');

    return (
        <React.Fragment>
            <div className="writing-div">
                <button onClick={write}>글쓰기</button>
            </div>
{/* 테일윈드 */}
            <div className={props.attr}>
                <ul>
                {
                    worryJosn.worryList.map((item, index) => {
                        return (
                            <li className={item.worryVal} key={item.code}>
                                <a onClick={() => alert(`클릭한 메뉴는 [${item.worryName}] 입니다.`)}>{item.worryName}</a>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </React.Fragment>
    );
}

const write = () => {
    alert('글을 작성하는 버튼입니다.');
}

export default WorryBox;