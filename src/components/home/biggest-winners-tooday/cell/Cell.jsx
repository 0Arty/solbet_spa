import style from "./Cell.module.scss"

const Cell = ({ img, logo, name }) => {

    return (
        <div className={style.cell}>
            <img src={img} alt="" className={style.trophy} />
            <div className={style.logo_container}>
                <img src={logo} alt="" className={style.logo} />
            </div>
            <span className={style.name}>{name}</span>
            <button className={style.btn}>+ 56.65994 <span> ETH</span></button>
        </div>
    )
};

export default Cell;
