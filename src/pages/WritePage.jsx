import React, {useState, useEffect, useRef} from "react";
import { Link, useNavigate  } from "react-router-dom";
import refCheck from "../utils/refCheck";
import Header from "../layout/Header";

const WritePage = () => {
    const navgate = useNavigate();
    const currentDate = new Date();
    
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth()+1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');

    // 분류에 뿌려주기 위한 카테고리
    const [worryList, setWorryList] = useState(JSON.parse(sessionStorage.getItem('stgWorryList')));
    // 기존 게시글에 storege에 업데이트 해주기 위해 사용되는 state 변수
    const [worryWriteList, setWorryWriteList] = useState(JSON.parse(sessionStorage.getItem('stgWorryWriteList')));
    const [writeInfo, setWriteInfo] = useState({
        title : '',
        writeKind : '',
        nickName : '',
        password : '',
        content : '',
        currentDate : '',
        seq : 0
    });
    
    const [navgateCheck, setNavgateCheck] = useState(false);
    
        useEffect(() => {
              const maxSeq = worryWriteList.reduce((acc, cur) =>{
                    return cur.seq > acc.seq ? cur : acc;
              },worryWriteList[0]);
              
              setWriteInfo({...writeInfo, "currentDate" : `${year}-${month}-${day}`, "seq" : maxSeq.seq+1});
        },[])

        useEffect(() => {
            sessionStorage.setItem('stgWorryWriteList', JSON.stringify(worryWriteList));
            if(navgateCheck) navgate('/');
        },[worryWriteList])

    const writeSubmit = (e) => {
        e.preventDefault();

        if(writeInfo.title === '' || writeInfo.writeKind === '' || writeInfo.nickName === '' || writeInfo.password === '' || writeInfo.content === '') {
            focusCheck();
        } else {
            setWorryWriteList([...worryWriteList, writeInfo]);
            setNavgateCheck(true);
        }
    }

    // 입력한된 input으로 focus() 를 사용하기위해 선언
    const inputRef_1 = useRef(null),
          inputRef_2 = useRef(null),
          inputRef_3 = useRef(null),
          inputRef_4 = useRef(null);

    let alertMessage = { nickName : '닉네임을 입력해주세요.',
                         password : '비밀번호를 입력해주세요.',
                         writeKind : '분류를 선택해주세요.',
                         title : '제목을 작성해주세요.',
                         content : '내용을 작성해주세요.'
                        }
    let refArr = {nickName : inputRef_1, password : inputRef_2, title: inputRef_3, content: inputRef_4}

    const focusCheck = () => {
        /*
            1번 인자 : 체크할 변수 (Object) - writeInfo 변수 참조
            2번 인자 : 특정 메시지 (alertMessage 변수 참조)
            3번인자 : focus할 객체  (useRef) - refArr 변수 참조
        */
        refCheck(writeInfo, alertMessage, refArr);
        
    }

        return (        
            <React.Fragment>
                <Header attr={"header_wrap"} />
                <div className="write-box">
                    <div>
                        <div className="write-content-title">
                            <div>글쓰기</div>
                        </div>                    
                        <form onSubmit={writeSubmit}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>닉네임</td>
                                        <td>
                                            <input type="text" 
                                                placeholder="닉네임"
                                                value={writeInfo.nickName}
                                                onChange={(e) => setWriteInfo({ ...writeInfo, "nickName" : e.target.value }) }
                                                ref={inputRef_1}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>비밀번호</td>
                                        <td>
                                            <input type="password"
                                                placeholder="암호"
                                                value={writeInfo.password}
                                                onChange={(e) => setWriteInfo({...writeInfo, 'password' : e.target.value})}
                                                ref={inputRef_2}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>분류</td>
                                        <td>
                                            {
                                                worryList ? worryList.map((item, index) => {
                                                    return (
                                                        <React.Fragment key={item.code}>
                                                            <input type="radio" 
                                                                name='worryCheck'
                                                                value={item.worryName}
                                                                onChange={(e) => setWriteInfo({...writeInfo, 'writeKind' : e.target.value, 'worryVal' : item.worryVal})}
                                                            />
                                                            <label>{item.worryName}</label>
                                                        </React.Fragment>
                                                    );
                                                }) : null
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>제목</td>
                                        <td>
                                            <input type="text"
                                                placeholder="제목"
                                                value={writeInfo.title}
                                                style={{width: '100%'}}
                                                onChange={ (e) => setWriteInfo({...writeInfo, 'title' : e.target.value}) }
                                                ref={inputRef_3}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{border: 'none'}} >내용</td>
                                        <td style={{border: 'none'}}>
                                            <textarea rows={25}
                                                    onChange={(e) => setWriteInfo({...writeInfo, 'content' : e.target.value})}
                                                    ref={inputRef_4}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="write-button-box">
                                <Link to="/">
                                    <button>목록으로</button>
                                </Link>
                                <button type="submit">등록</button>                            
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }    

export default WritePage;