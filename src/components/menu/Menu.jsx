import style from "./Menu.module.scss"

const Menu = ({img, left, right}) => {

  return (
    <div className = {style.container}>
        <img src={img} alt="" className = {style.bg}/>
        {
            !!left &&  <img src={left} alt="" className = {style.left}/>
        }
        <img src={right} alt="" className = {style.right}/>
      
    </div>
  )
};

export default Menu;
