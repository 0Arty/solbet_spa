import style from '../components/faq/Faq.module.scss'
import Question from '../components/faq/question/Question'
import SendEmail from '../components/footer/send-email/SendEmail'
import Footer from '../components/footer/Footer'

const FAQ = () => {
  return (
    <div className={style.box}>
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