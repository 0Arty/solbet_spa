import style from './CardsTitle.module.scss'

const CardsTitle = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <p>AVAILABLE <span className={style.blue}>BETS</span></p>
      </div>
      <div className={style.subtitle}>
        <p>To meet today's challenges & earn cryptocurrency</p>
      </div>
    </div>
  )
}

export default CardsTitle
