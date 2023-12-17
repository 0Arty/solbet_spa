import style from "./Preview.module.scss"
import preview from '../../../assets/main/preview.svg'

const Preview = ({ props }) => {

    return (
        <div className={style.container}>
            <img src={preview} alt="" className={style.image} />


            <div className={style.text}>

                <h1>
                    BET & GAIN
                </h1>
                <h2>REWARDS</h2>
                <p>Free, Fun & Fair Rewards For Everyone</p>

                <button className = {style.btn}>START BET!</button>
            </div>
        </div>
    )
};

export default Preview;
