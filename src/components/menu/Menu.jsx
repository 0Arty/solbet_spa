import { Link } from "react-router-dom";
import style from "./Menu.module.scss"
import { RouteNames } from "../../constants/routes";

const Menu = ({ img, left, right, heading, page }) => {

    return (
        <div className={style.menu_container}>
            { !!img && <img src={img} alt="" className={style.bg} />}
            { !!left && <img src={left} alt="" className={style.left} />}
            <img src={right} alt="" className={style.right} />
            
            
            
            <div className={style.content}>

                <h2 className={style.heading}>
                    {heading}
                </h2>

                <div className = {style.bread_crams}>
                    <span>
                        <Link to={RouteNames.init} className = {style.link}>Home</Link>
                        </span>
                    <span> {`>`} </span>
                    <span>{page}</span>
                </div>
            </div>


        </div>
    )
};

export default Menu;
