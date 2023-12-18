// icons
import style from "./Header.module.scss"
import logo from '../../assets/header/logo.svg'
import home from "../../assets/header/home.svg"
import games from "../../assets/header/games.svg"
import faq from "../../assets/header/faq.svg"
// components
import LinkElement from "./Link"
import Selector from "./selector/Selector"
// constants
import { RouteNames } from '../../constants/routes'

const Header = () => {

    return (
        <header className = {style.wrapper}>
            <div className={style.container}>

            <img src={logo} alt="" className={style.logo} />

            <div className = {style.links}>
                <LinkElement svg={home} text={'HOME'} link={RouteNames.init} />
                <LinkElement svg={games} text={'GAMES'} link={RouteNames.games} />
                <LinkElement svg={faq} text={'FAQ'} link={RouteNames.faq} />
                <Selector />
            </div>
            <button className={style.btn}>CONNECT</button>
            </div>
            <hr className = {style.line}/>
        </header>
    )
};

export default Header;
