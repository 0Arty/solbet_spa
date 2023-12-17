import style from "./Header.module.scss"
import logo from '../../assets/header/logo.svg'
// import { ReactComponent as PlanetSVG } from "../../assets/header/planet.svg"
import { ReactComponent as ArrowSvg } from "../../assets/header/down_arrow.svg"
import { ReactComponent as HomeSvg } from "../../assets/header/home.svg"
import { ReactComponent as GamesSvg } from "../../assets/header/games.svg"
import { ReactComponent as FaqSvg } from "../../assets/header/faq.svg"



import home from "../../assets/header/home.svg"

import games from "../../assets/header/games.svg"
import faq from "../../assets/header/faq.svg"


import LinkElement from "./Link"
import Selector from "./selector/Selector"
const Header = ({ props }) => {

    return (
        <header className = {style.wrapper}>
            <div className={style.container}>

            <img src={logo} alt="" className={style.logo} />

            <div className = {style.links}>
                <LinkElement svg={home} text={'HOME'} />
                <LinkElement svg={games} text={'GAMES'}/>
                <LinkElement svg={faq} text={'FAQ'} />
                <Selector />
            </div>
            <button className={style.btn}>CONNECT</button>
            </div>
            <hr className = {style.line}/>
        </header>
    )
};

export default Header;
