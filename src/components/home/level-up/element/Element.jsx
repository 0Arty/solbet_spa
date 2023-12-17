import style from "./Element.module.scss"

const Element = ({img, text}) => {

  return (
    <div className = {style.box}>
      <img src={img} alt="" />
      <span>{text}</span>
    </div>
  )
};

export default Element;
