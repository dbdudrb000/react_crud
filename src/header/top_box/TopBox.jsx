import React from "react";
import './css/top-box.css';

const TopBox = () => {
    return (
        <React.Fragment>
            <div className="top-containner-box">
                <div className="top-title">
                    <h2>고민상담</h2>
                </div>
                <div className="top-login-box">
                    <nav>
                        <ul>
                            <li>
                                <a onClick={() => { alert('로그인입니다.') }}>로그인</a>
                            </li>
                            <li>
                                <a onClick={() => { alert('회원가입 버튼입니다.'); }}>회원가입</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </React.Fragment>
    );
}

export default TopBox;