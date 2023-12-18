// icons
import style from "./Header.module.scss"
import logo from '../../assets/header/logo.svg'
// components
import LinkElement from "./Link"
// constants
import { RouteNames } from '../../constants/routes'

const Header = () => {

    return (
        <header className={style.wrapper}>
            <div className={style.container}>
                <img src={logo} alt="" className={style.logo} />
                <LinkElement text={'HOME'} link={RouteNames.init} />
                <LinkElement text={'GAMES'} link={RouteNames.games} />
                <LinkElement text={'FAQ'} link={RouteNames.faq} />
                <button className={style.btn}>CONNECT</button>
            </div>
            <hr className={style.line} />
        </header>
    )
};

export default Header;
