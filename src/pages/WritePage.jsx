import React, {useState, useEffect, useRef} from "react";
import { Link, useNavigate  } from "react-router-dom";

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
    
    // 입력한된 input으로 focus() 를 사용하기위해 선언
    const inputRef_1 = useRef(null),
          inputRef_2 = useRef(null),
          inputRef_3 = useRef(null),
          inputRef_4 = useRef(null);
    
    /*
        # 햇갈리는점
        - 23째 라인에 에서 랜더링 되기 전 sessionStorege에 값을 set하면은 브라우져에서는 바로 반영이 안된다.
        하지만 useEffect 를 사용하면은 브라우져에서도 바로 데이터가 업데이트 된것처럼 보이는데 랜더링 되는 시점에 대해서 햇갈린다
        물어봐야 함. ★★★★★★
    */

        /*
            39번쨰 라인을 등록하는 버튼 누르는 함수에서 실행시에는 브라우져 storege에는 왜 안들어가는가???
        */
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
    
        // 글 등록하면 홈으로 이동하고 싶은데 페이지 들어올때마다 바로 랜더링이 이루어져서 글 작성을 못하네...
        // 랜더링된 후에 값이 state 변수 값이 적용이 되므로 navgateCheck State 변수가 true 일때 (글 등록 누른 시점) 에 HomePage 로 가도록 설정
        // └ navgate 가 navgateCheck 가 true일때만 가도록 안하면은 현재 컴포넌트 들어옴과 동시에 / 경로로 이동해버린다. 
        // 랜더링 시점 햇갈려....!!!

    const writeSubmit = (e) => {
        e.preventDefault();

        if(writeInfo.title === '' || writeInfo.writeKind === '' || writeInfo.nickName === '' || writeInfo.password === '' || writeInfo.content === '') {
            focusCheck();
        } else {
            setWorryWriteList([...worryWriteList, writeInfo] );
            setNavgateCheck(true);
            // sessionStorage.setItem('stgWorryWriteList', JSON.stringify(worryWriteList));
        }
    }

    const focusCheck = () => {
        if(writeInfo.nickName === '') {
            alert('닉네임을 입력해주세요.');
            inputRef_1.current.focus();
        } else if(writeInfo.password === ''){
            alert('비밀번호를 입력해주세요.');
            inputRef_2.current.focus();
        }else if(writeInfo.writeKind === '') {
            alert('분류를 선택해주세요.');
        } else if(writeInfo.title === '') {
            alert('제목을 작성해주세요.');
            inputRef_3.current.focus();
        }else if(writeInfo.content === '') {
            alert('내용을 작성해주세요.');
            inputRef_4.current.focus();
        }
    }

        return (        
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
        );
    }    

export default WritePage;