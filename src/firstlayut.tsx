import React, { useState } from 'react';
import './firstlayout.css';

interface Props {
    btnName: string;
    secondbtnName: string;
    value?: string;
}

const FirstLayout: React.FC<Props> = (Props) => {
    const [Firststatus, setFirststatus] = useState(false);
    const [Secondstatus, setSecondstatus] = useState(false);
    const [inputValue, setinputValue] = useState("");
    
    //判斷第一層是否有被點擊，預設為false
    //在展開第二層且在limit輸入的畫面上，點擊第一層的按鈕後要將兩層的狀態都調回預設的false
    const L1_checked = () => {
        if(Firststatus){
            setSecondstatus(false);
            setFirststatus(false);
        }else{
            setFirststatus(true);
        }
    }
    
    //判斷第二層(LIMIT)是否有被點擊，預設為false
    const L2_checked = () => {
        if(Secondstatus){
            setSecondstatus(false);
        }else{
            setSecondstatus(true);
        }
    }

    // 根據第二層(LIMIT)是否有被被點擊來決定要回傳的畫面
    // true: 就是回傳已展開LIMIT跟輸入的畫面
    // false: 就是回傳根據第一層是否有被點擊的兩個畫面之一:
    // 1. 只有第一層
    // 2. 展開第二層但未點擊limit
    if(Secondstatus){
        return (
            <div className="L1">
                <button className={ Firststatus ? 'L1-clicked' : 'L1-default' } onClick={L1_checked}>{Props.btnName}</button>
                <div  className="L2">
                    <button className={Secondstatus ? 'L2-limit-clicked' : 'L2-limit'} onClick={L2_checked}>LIMIT</button>
                    <input className='limitInput' onChange={(e) => {setinputValue(e.currentTarget.value)}} />
                    <p>{inputValue}</p>
                </div>
            </div>
        );
    }else{
        return (
            <div  className="L1">
                <button className={ Firststatus ? 'L1-clicked' : 'L1-default' } onClick={L1_checked}>{Props.btnName}</button>
                { Firststatus && 
                    <div  className="L2">
                        <button className='L2-default'>{Props.secondbtnName}</button>
                        <button className='L2-limit' onClick={L2_checked}>LIMIT</button>
                    </div>
                }
            </div>
        )
    }

};

export default FirstLayout;