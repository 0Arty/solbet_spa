//icons
import style from "./Footer.module.scss"
import { ReactComponent as DownArrowSvg } from "../../assets/main/footer/down arrow.svg";
import { ReactComponent as TwitterIcon } from "../../assets/main/footer/tweeterIcon.svg";
import { ReactComponent as DiscordIcon } from "../../assets/main/footer/facebookIcon.svg";


const Footer = ({ children }) => {

    return (
        <footer className={style.container}>
            <div className={style.children}>
                {children}
            </div>

            <div className={style.content}>
                <div className={style.box}>
                    <p>Copyright © SOLBET | ALL RIGHTS RESERVED</p>
                    <div className = {style.icons}>

                        <TwitterIcon />
                        <DiscordIcon />
                        <button className = {style.btn}>ENGLISH <DownArrowSvg/></button>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
};

export default Footer;
