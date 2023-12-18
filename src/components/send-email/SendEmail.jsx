import style from "./SendEmail.module.scss"

import win from '../../assets/main/footer/win.svg'
import rocket from '../../assets/main/footer/rocket.svg'


const SendEmail = ({ props }) => {

    return (
        <div className={style.box}>
            <img src={win} alt="" className = {style.left_image}/>
            <div className={style.content}>
                <h2>Want gaming & esports news straight to your inbox?</h2>
                <p>To Get Exclusive Benefits</p>
                <div className = {style.input}>
                <input type="text" placeholder="Enter your email address"/>
                <button>Subscribe</button>

                </div>
            </div>
            <img src={rocket} alt="" className = {style.right_image}/>
        </div>
    )
};

export default SendEmail;
