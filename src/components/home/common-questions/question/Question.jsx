import { useState } from "react";
import style from "./Question.module.scss"

import { ReactComponent as PlusSvg } from "../../../../assets/main/question/plus.svg";
import { ReactComponent as MinusSvg } from "../../../../assets/main/question/minus.svg";
import classNames from "classnames";

const Question = ({ text, answer }) => {

    const [isOpen, setIsOpen] = useState(false)
    const answerHandler = () => {
        setIsOpen(prev => !prev)
    }
    let button 
    if (isOpen) {
        button = <MinusSvg />
    }
    else {
        button = <PlusSvg />
    }


    return (
        <div className={style.box}>
            <div className={classNames(style.quest, isOpen ? '' : style.active ) }>
                <span>{text}</span>
                <button onClick={() => answerHandler()}>
                    {
                    button}
                </button>
            </div>
            {isOpen && <div className={style.answer}><span>{answer}</span></div>}
        </div>
    )
};

export default Question;
