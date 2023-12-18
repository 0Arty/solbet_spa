import style from './BigWinners.module.scss'
import trophy from '../../../assets/main/games-page/trophy.svg'
import player1 from '../../../assets/main/games-page/player1.svg'

export const WinnerCard = () => {
  return (
    <div className={style.winnerCard}>
      <div className={style.winnerCardContent}>
        <p>jackpot winner</p>
        <img src={trophy} alt={''} />
        <img className={style.player1} src={player1} alt={''} />
        <div className={style.winBlock}>
          <p>€ 496</p>
        </div>
      </div>
    </div>
  )
}