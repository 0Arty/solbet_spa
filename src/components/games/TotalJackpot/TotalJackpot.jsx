import style from './TotalJackpot.module.scss'
import chest from '../../../assets/main/games-page/chest.svg'
import classNames from 'classnames';
import { TotalJackpotComponent } from './TotalJackpotComponent'

const TotalJackpot = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.chest} src={chest} alt={''} />
      <div>
        <div className={style.title}>
          <p>TOTAL JACKPOT AMOUNT</p>
        </div>
        <TotalJackpotComponent amount={'4961491'}/>
      </div>
      <img src={chest} className={classNames(style.chest, style.reverted)} alt={''}/>
    </div>
    )
}

export default TotalJackpot