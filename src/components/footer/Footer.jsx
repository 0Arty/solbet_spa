import style from "./Footer.module.scss"
import { ReactComponent as LogoSvg } from "../../assets/header/logo.svg";

const Footer = ({ children }) => {

    return (
        <footer className={style.container}>
            <div className={style.children}>
                {children}
            </div>

            <div>
                <LogoSvg />
                <div></div>
            </div>
        </footer>
    )
};

export default Footer;
