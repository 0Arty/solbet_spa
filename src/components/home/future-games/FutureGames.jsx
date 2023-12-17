import style from "./FutureGames.module.scss"
import Heading from "./heading/Heading";
import Slider from "./slider/Slider";

const FutureGames = ({ props }) => {

    return (
        <div className={style.box}>
            <Heading />
            <Slider />
        </div>
    )
};

export default FutureGames;
