// icons
import style from "./Question.module.scss"
import {ReactComponent as RightSvg} from '../../../assets/faq/Icon.svg'
import {ReactComponent as BottomSvg} from '../../../assets/faq/down arrow.svg'
// libriaries
import { useState } from "react";
import classNames from "classnames";




const Question = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)
    const answerHandler = () => {
        setIsOpen(prev => !prev)
    }
    let button = <RightSvg />
    if (isOpen) {
        button = <BottomSvg />
    }


    return (
        <div className={style.box} 
        onClick={()=>{answerHandler()}}
        >
            <div className={classNames(style.quest, isOpen ? '' : style.active ) }>
                <span>{question}</span>

                <button >
                    {button}
                </button>
            </div>
            {isOpen && <div className={style.answer}><span>{answer}</span></div>}
        </div>
    )
};

export default Question;
