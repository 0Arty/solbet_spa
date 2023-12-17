import style from "./Card.module.scss"

const Card = ({ img, text }) => {

    return (
        <div className = {style.card}>
            <div className = {style.image}>
                <img src={img} alt=""/>
            </div>
            <div className = {style.text}>
                <h2>{text.heading}</h2>
                <p>{text.p}</p>
            </div>
        </div>
    )
};

export default Card;
