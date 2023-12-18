import style from "./Heading.module.scss"
import { ReactComponent as RightSvg } from "../../../../assets/main/features/right arrow.svg"
import { RouteNames } from '../../../../constants/routes'

const Heading = () => {
  
  const redirect = (link) => () => {
    window.location.href = link
  }
  
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h2>available GAMES</h2>
                <p>To meet today's challenges & earn cryptocurrency</p>
            </div>
            <div className={style.btns}>
                <button onClick={redirect(RouteNames.games)}>
                    GAMES
                    <RightSvg />
                </button>
                <button onClick={redirect(RouteNames.faq)}>
                    FAQ
                    <RightSvg />
                </button>
            </div>
        </div>
    )
};

export default Heading;
