import style from "./Heading.module.scss"
import { ReactComponent as RightSvg } from "../../../../assets/main/features/right arrow.svg"

const Heading = ({ props }) => {

    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>available GAMES</h2>
                <p>To meet today's challenges & earn cryptocurrency</p>
            </div>
            <div className={style.btns}>
                <button>
                    GAMES
                    <RightSvg />
                </button>
                <button>
                    FAQ
                    <RightSvg />
                </button>
            </div>
        </div>
    )
};

export default Heading;
