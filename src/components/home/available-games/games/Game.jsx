import style from "./Game.module.scss"
import { ReactComponent as MarkSvg } from "../../../../assets/main/available games/solanaLogoMark.svg";
import { ReactComponent as StarSvg } from "../../../../assets/main/available games/star.svg";
import classNames from "classnames";


const Game = ({ props }) => {

    return (
        <div className={style.card}>
            <div className={style.spacial_btns}>
                <MarkSvg />
                <StarSvg />
            </div>
            <div className={style.title}>
                <h3>Will Solana cost $100 ?</h3>
            </div>

            <div className={style.btns}>
                <div className={classNames(style.yes, style.btn)}>
                    <span>$10.000 Total Bet</span>
                    <button className={style.yes}>Yes</button>
                </div>
                <div className={classNames(style.no, style.btn)}>
                    <span>Express Dec 31, 2023</span>
                    <button className={style.no}>No</button>
                </div>
            </div>
        </div>
    )
};

export default Game;
