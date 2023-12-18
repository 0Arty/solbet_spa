import style from "./Faq.module.scss"

const Faq = ({props}) => {

  return (
    <div className = {style.box}>
        <h2>frequently asked questions</h2>
        <p>Play in multi-player tournaments or head to head for cash prizes.</p>

        <div className = {style.btns}>

        </div>
        <div className = {style.list_question}>

        </div>
    </div>
  )
};

export default Faq;
