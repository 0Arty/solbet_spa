import style from "./Link.module.scss"

const LinkElement = ({ svg, text}) => {

    return (
        <div className = {style.container}>
            <div className = {style.image}>
                <img src={svg} alt="" />
            </div>
            <div className = {style.selector}>
                {text} 
            </div>
        </div>
    )
};

export default LinkElement;
