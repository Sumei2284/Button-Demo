//Typescript 語法
//有時候不是非同步的用法，所以用?會比較方便

//引入React以及其useState函式
import React, { useState } from 'react';
//分別從外部檔案引入styled跟Button
import styled from 'styled-components';
import Button from 'components/button/button';   

//使用interface定義Props的架構，包含value, onChange
//Q: value?:, onChange?: (value: string[]) => void
//宣告一個TYPE 兩個屬性不見得要套用 就是?.用法
interface Props {
    value?: string[];
    onChange?: (value: string[]) => void;
}

//宣告一個名為WeekdaySelector的變數...? Q:整行不確定 -->初始化或是更新時都會呼叫Function component，這邊限定是會呼叫Props?
const WeekdaySelector: React.FC<Props> = (props: Props) => {

    //宣告一個名為option的陣列，存有字串
    const options = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //呼叫useState Hook來宣告一個State的變數，並回傳一對由我們自己命名的值，資料型別明確設定為字串型態的陣列
    //第一個回傳的是名為weekdays的state變數，將起始值為空的字串陣列傳入useState當作唯一參數
    //第二個回傳的值是可以更新的function，名為setWeekdays
    const [weekdays, setWeekdays] = useState<string[]>([]);

    //回傳一個要傳遞的物件，用<div>來包住{option}
    //使用map()來根據元素自身的順序走訪所有元素並回傳一個[key, value]陣列
    //帶入d這個字串參數到options.map()，回傳WeekdayOption這個元件，並且已經設定好它的三個參數
    //將WeekdayOption.value設定為d
    //將WeekdayOption.checked設定為
    //將WeekdayOption.onClick回傳一個判斷式: 如果weekdays.indexOf(d)>=0，則:
    //利用setWeekdays來更新Weekdays.s值不等於d。
    //反之: 利用setWeekdays來更新Weekdays，合併兩個陣列並回傳一個新的陣列，換句話說就是將d加入到Weekdays的陣列尾端。
    //Q: props.onChange?.(weekdays.filter(s=>s!==d)); 跟 props.onChange?.(weekdays.concat([d])); 主要是?.的用法 --> ?.會回傳undefined而非error
    return (
        <div className="d-flex is--space-around">
            {options.map(d=>
                <WeekdayOption 
                    value={d} 
                    checked={(props.value || weekdays).indexOf(d)>=0}  //props.value ? props.value : weekdays
                    onClick={()=>{
                        if(weekdays.indexOf(d)>=0){//checked
                            setWeekdays(weekdays.filter(s=>s!==d));
                            props.onChange?.(weekdays.filter(s=>s!==d));
                        }
                        else{
                            setWeekdays(weekdays.concat([d]));
                            props.onChange?.(weekdays.concat([d]));
                        }
                    }}
                />
            )}
        </div>
    )
}
//匯出一個預設且名為WeekdaySelector的物件
export default WeekdaySelector;

//宣告一個名為WeekdayOption的方法，Props包含了兩個屬性(字串型態的value跟布林型態的checked)跟一個事件(onClick 針對滑鼠點擊的事件)
//props: 將所有控制的元件屬性及其他參數都整合的一個物件
const WeekdayOption = (props:{value: string, checked: boolean, onClick: React.MouseEventHandler<HTMLElement>}) => (
    //使用Option這個元件，要帶入三個參數(shape, onClick, checked)
    //Option的children變成props的value第一個元素的值，並指用toUpperCase()方法將其值轉成全部大寫英文的格式
    //Q:為什麼value是陣列? 是因為預設輸入的資料型態就是一個陣列嗎?
    <Option shape='circle' onClick={props.onClick} checked={props.checked}>
        {props.value[0].toUpperCase()}
    </Option>
);

//使用interface定義OptionProps的架構，包含資料型態為布林的checked
interface OptionProps {
    checked: boolean;
}

//宣告一個名為Option的styled...?
//根據styled的資料結構，針對Button帶入OptionProps的資料結構?
//後面接著一串字串，在${}內可寫JS語法
//分別針對background-color、color進行判斷:
//background-color: 如果props.checked為true就設定顏色為'#0083C1'，反之設定為'#E3E3E3'
//color: 如果props.checked為true就設定顏色為'white'，反之設定為'black'
//可以直接寫css
//&:, focus{} 用&將FOCUS專注在styled(Button)<OptionProps>上
const Option = styled(Button)<OptionProps>`
    background-color: ${(props: any)=>props.checked?'#0083C1':'#E3E3E3'};
    color: ${(props: any)=>props.checked?'white':'black'};
    border-radius: 20px;
    font-size: 16px;
    margin: 0 5px;
    padding: 0;

    &:focus {
        background-color: ${(props: any)=>props.checked?'#0083C1':'#E3E3E3'};
        color: ${(props: any)=>props.checked?'white':'black'};
    }
`;
