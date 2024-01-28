
const refCheck = (state: any, message: any, ref: any) => {
        const checkKey = Object.keys(state);
        let check = 0;

        if(typeof state === 'undefined' || typeof message === 'undefined' || typeof ref === 'undefined') {
            alert('Parameter 값이 정확하지 않습니다.\n(관리자에게 문의하세요)'); 
            return true;
        }

        checkKey.forEach(item => {
            if(check == 0) {
                if(state[item] === '' &&  typeof ref[item] !== 'undefined') {
                    alert(message[item]);
                    check++;
                    ref[item].current.focus();
                }else if(state[item] === ''&& typeof ref[item] === 'undefined') {
                    alert(message[item]);
                    check++;
                } 
            }
         })
}

export default refCheck;