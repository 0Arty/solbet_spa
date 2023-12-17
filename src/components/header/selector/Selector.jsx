import style from "./Selector.module.scss"
import planet from "../../../assets/header/planet.svg"
import down_arrow from "../../../assets/header/down_arrow.svg"

const Selector = ({ props }) => {

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={planet} alt="" />
            </div>
            <div className={style.selector}>
                <span className = {style.language}>
                    EN
                </span>
                <img src={down_arrow} alt="" />
            </div>
        </div>
    )
};

export default Selector;
