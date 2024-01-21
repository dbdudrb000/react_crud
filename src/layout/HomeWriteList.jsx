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

    return(
        <div className={props.attr}>
            <div className="worry-write-second-box">
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
                                worryWriteList ? worryWriteList.map((item, index) => {
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
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}; 

export default HomeWriteList;




