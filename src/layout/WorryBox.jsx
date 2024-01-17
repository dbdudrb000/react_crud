import React, { useState } from "react";

const WorryBox = (props) => {

    const [worry, setWorry] = useState('all');
    const worryList = [{worryName : '전체', worryVal : 'all', },
                       {worryName : '취업문제', worryVal : 'jobProblem'},
                       {worryName : '연애문제', worryVal : 'loveProblem'},
                       {worryName : '가정문제', worryVal : 'familyProblem'},
                       {worryName : '스트레스', worryVal : 'stressProblem'},
                       {worryName : '우울증', worryVal : 'depressionProblem'},
                       {worryName : '직장문제', worryVal : 'workProblem'},
                       {worryName : '자녀문제', worryVal : 'childrenProblem'},
                       {worryName : '수면장애', worryVal : 'sleepProblem'},
                       {worryName : '학교문제', worryVal : 'schoolProblem'},
                       {worryName : '대인관계', worryVal : 'personProblem'},
                       {worryName : '컴퓨터중독', worryVal : 'pcProblem'},
                       {worryName : '불안증', worryVal : 'anxietyProblem'},
                       {worryName : '트라우마', worryVal : 'traumaProblem'},
                       {worryName : '기타', worryVal : 'theRest'}
                    ];
    return (
        <React.Fragment>
            <div className="writing-div">
                <button onClick={write}>글쓰기</button>
            </div>

            <div className={props.attr}>
                <ul>
                    {
                        worryList.map((item, index) => {
                            return (
                                <li className={item.worryVal} key={item.worryVal}>
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