import style from "./Footer.module.scss"
import { ReactComponent as LogoSvg } from "../../assets/header/logo.svg";
import LinkElement from "../header/Link";
import Selector from "../header/selector/Selector";



const Footer = ({ children }) => {

    return (
        <footer className={style.container}>
            <div className={style.children}>
                {children}
            </div>

            <div className = {style.content}>
                <LogoSvg />
                <div className = {style.links}>
                <LinkElement  text={'HOME'} />
                <LinkElement  text={'GAMES'}/>
                <LinkElement text={'FAQ'} />
                <Selector />
                
                
            </div>
            </div>
        </footer>
    )
};

export default Footer;
