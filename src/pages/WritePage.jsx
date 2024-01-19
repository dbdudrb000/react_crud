import React, {useState, useEffect, useRef} from "react";

const WritePage = (props) => {
    const [writeInfo, setWriteInfo] = useState({
        title : '',
        writeKind : '',
        nickName : '',
        password : '',
        content : '',
    });

    useEffect( () => {
        console.log(`writeInfo ==> ${JSON.stringify(writeInfo)}`);
    },[writeInfo])

        return (        
            <div className="write-box">
                <table>
                    <tr className="write-content-title">
                        <td>
                            <div>글쓰기</div>
                        </td>
                    </tr>
                    <tr>
                        <td>닉네임</td>
                        <td>
                            <input type="text" 
                                placeholder="닉네임"
                                value={writeInfo.nickName}
                                onChange={(e) => setWriteInfo({ ...writeInfo, "nickName" : e.target.value }) }
                            />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }    

export default WritePage;