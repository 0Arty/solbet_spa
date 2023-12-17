import style from "./AvailableGames.module.scss"
import Game from "./games/Game";
import Heading from "./heading/Heading";

const AvailableGames = ({ props }) => {

    return (
        <div className={style.container}>
            <Heading />
            <div className={style.games}>
                <Game />
                <Game />
                <Game />
            </div>
        </div>
    )
};

export default AvailableGames;
