import style from "./Heading.module.scss"
import { ReactComponent as RightSvg } from '../../../../assets/main/features/right arrow.svg'

const Heading = ({ props }) => {

    return (
        <div className={style.box}>
            <div className={style.text}>
                <h2>FEATURED GAMES</h2>
                <p>To meet today's challenges & earn cryptocurrency</p>
            </div>
            <div className={style.btn}>

                <button>
                    SHOW ALL
                    <RightSvg />
                </button>
            </div>
        </div>
    )
};

export default Heading;
