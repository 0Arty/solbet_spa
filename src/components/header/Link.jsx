import style from "./Link.module.scss"

const LinkElement = ({ svg, text, link }) => {

  const redirect = () => {
    window.location.href = link
  }

    return (
        <div className = {style.container} onClick={redirect}>
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
