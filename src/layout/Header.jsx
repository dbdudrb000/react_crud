import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
            <header className={props.attr}>
                <div className="top-containner-box">
                    <div className="top-title">
                        <h2><Link to="/">WC 상담센터 </Link></h2>
                    </div>
                </div>
            </header>
    );
}

export default Header;