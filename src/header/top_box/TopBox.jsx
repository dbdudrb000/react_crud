import React from "react";
import './css/top-box.css';
import {Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import SignInCompoment from './signIn/SignInCompoment';
import SignUpCompoment from './signUp/SignUpCompoment';


const TopBox = () => {
/* 
    const navigate = useNavigate();
    const loginMove = () => {
        navigate('/login');
    }
*/

    return (
        <React.Fragment>
            <header>
                <BrowserRouter>
                    <Routes>
                        <Route path={'login'} element={<SignInCompoment />} />
                        <Route path={'logup'} element={<SignUpCompoment />} />
                    </Routes>
                
                <div className="top-containner-box">
                    <div className="top-title">
                        <h2>고민상담</h2>
                    </div>
                    <div className="top-login-box">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="login">로그인2</Link>
                                </li>
                                <li>
                                    <a onClick={() => { alert('회원가입 버튼입니다.'); }}>회원가입</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </BrowserRouter>
            </header>
        </React.Fragment>
    );
}

export default TopBox;