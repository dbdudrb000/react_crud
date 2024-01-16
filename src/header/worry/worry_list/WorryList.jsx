import React, {useState} from "react";
import './css/worryKindList.css';

const WorryList = () => {
    const [worry, setWorry] = useState(0);
    let worryList = [{worryName : '전체', worryVal : 0},
                     {worryName : '취업문제', worryVal : 1},
                     {worryName : '연애문제', worryVal : 2},
                     {worryName : '가정문제', worryVal : 3},
                     {worryName : '스트레스', worryVal : 4},
                     {worryName : '우울증', worryVal : 5},
                     {worryName : '직장문제', worryVal : 6},
                    ];

    return (
        <React.Fragment>
            <div className="worry-box">
                <ul>
                    {
                        worryList.map((item, index) => {
                            return <li >
                                    <a>{item.worryName}</a>
                                  </li>
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
}

export default WorryList;