import React, {useState} from "react";

const WritePage = () => {
    const [writeTitle, setWriteTitle] = useState("");
    const [writeKind, setWriteKind] = useState("");
    const [nickName, setNickName] = useState("");
    const [writePassword, setWritePassword] = useState("");
    const [writeContent, setWriteContent] = useState("");

    return (
        <div>
                글쓰기 작성 페이지
        </div>
    );
}

export default WritePage;