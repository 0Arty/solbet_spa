import style from '../components/faq/Faq.module.scss'
import Question from '../components/faq/question/Question'
import SendEmail from '../components/footer/send-email/SendEmail'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'
import globe from '../assets/menu/game/globe.svg'
import casino from '../assets/menu/game/casino.svg'

const FAQ = () => {
  return (
    <div className={style.box}>
      <Menu right={casino} left={globe}/>
      <h2>frequently asked questions</h2>
      <p>Play in multi-player tournaments or head to head for cash prizes.</p>

      <div className={style.btns}>

      </div>
      <div className={style.list_question}>
        <Question
          question={'text'}
          answer={'answer'}
        />
        <Question
          question={'text'}
          answer={'answer'}
        />
        <Question
          question={'text'}
          answer={'answer'}
        />
        <Question
          question={'text'}
          answer={'answer'}
        />
        <Question
          question={'text'}
          answer={'answer'}
        />
        <Question
          question={'text'}
          answer={'answer'}
        />

      </div>


      <Footer children={<SendEmail />} />
    </div>
  )
}

export default FAQ