import style from "./Icon.module.scss"

const Icon = ({ img,money, title }) => {

    return (
        <div className = {style.box}>
            <img src={img} alt="" />
            <span className = {style.money}>{money}</span>
            <span className = {style.title}>{title}</span>
        </div>
    )
};

export default Icon;
