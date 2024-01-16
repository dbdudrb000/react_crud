import React from "react";
import './css/top-box.css';
import { Link } from 'react-router-dom';

const TopBox = () => {
    return (
        <React.Fragment>
            <header>
                <div className="top-containner-box">
                    <div className="top-title">
                        <h2><Link to="/">익명 고민센터</Link></h2>
                    </div>
                    <div className="top-login-box">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="login">로그인</Link>
                                </li>
                                <li>
                                    <Link to="signup">회원가입</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default TopBox;