import React, {useState, useEffect} from "react";
import worryWrite from '../json/worryWriteList.json';

const HomeWriteList = (props) => {
    const [worryWriteList, setWorryWriteList] = useState([]);

    useEffect(() => {
        const worryWriteContent = sessionStorage.getItem('stgWorryWriteList');

        if(worryWriteContent) {
            setWorryWriteList(JSON.parse(worryWriteContent));
        }else {
            sessionStorage.setItem('stgWorryWriteList', JSON.stringify(worryWrite.writeList));
            setWorryWriteList(worryWrite.writeList);
        }
    },[]);

    /*
       현재 페이지가 랜더링되면 무조건 검색어의 문자열로 arr를 만든다

       검색어 존재 : 검색어 문자열로 includes하면 true인것들만 filteringArray 변수에 담아질테니 그것들을 뿌려질것이다.
       검색어 존재 X : 필터링없이 item그대로 대입시킨다.
    */

    const filteringArray = worryWriteList.filter((item) => {
        return props.search !== '' ? item.title.toLowerCase().includes(props.search.toLowerCase()) : item
    });

    const myWriteOnChange = (e) => {
        props.worryCallbackFn('myWriteCheck', e.target.checked);
    }

    return(
    
        <div className={props.attr}>
            <div className="worry-write-second-box">
                <div className="myCheckBox-div">
                    <input type="checkbox"
                           name="myBoardCheck"
                           onChange={myWriteOnChange}
                    />
                    <label>나의 게시글만 확인</label>
                </div>
                <div className="thead-write-line"></div>
                <form>
                    <table>
                        <thead>
                            <tr className="main-write-thead-tr">
                                <td>번호</td>
                                <td>분류</td>
                                <td>제목</td>
                                <td>글쓴이</td>
                                <td>날짜</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="thead-write-line"></div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // [전체] 선택이 아닌 선택한 카테고리의 리스트만 보여진다.
                                filteringArray ? filteringArray?.filter((item) => item.worryVal === props.checkedWorry && item.worryVal !== 'all')
                                                                .map((item, index) => {
                                                                    return(
                                                                        <tr key={String(item.seq)} className="main-write-List-tr">
                                                                            <td>{item.seq}</td>
                                                                            <td>{item.writeKind}</td>
                                                                            <td>{item.title}</td>
                                                                            <td>{item.nickName}</td>
                                                                            <td>{item.currentDate}</td>
                                                                        </tr> 
                                                                    ) 
                                                                }) : null
                            }
                            { // 카테고리 상관없이 전체 리스트가 보여진다.
                                filteringArray ? filteringArray.filter(() => props.checkedWorry === 'all')
                                                               .map((item) => {
                                                                    return(
                                                                        <tr key={String(item.seq)} className="main-write-List-tr">
                                                                            <td>{item.seq}</td>
                                                                            <td>{item.writeKind}</td>
                                                                            <td>{item.title}</td>
                                                                            <td>{item.nickName}</td>
                                                                            <td>{item.currentDate}</td>
                                                                    </tr> 
                                                                    );
                                                                }) : null
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}; 

export default HomeWriteList;




