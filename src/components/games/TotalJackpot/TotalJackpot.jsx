import style from './TotalJackpot.module.scss'
import chest from '../../../assets/main/games-page/chest3.png'
import classNames from 'classnames';

const NumberComponent = ({symbol}) => {
  return (
    <div className={style.numberEl}>
      <p>{symbol}</p>
    </div>
  )
}

const TotalJackpotComponent = ({ amount }) => {
  const symbolArr = ['€' ,...amount.split('')]
  
  return (
    <div className={style.jackpotWrapper}>
      {!!symbolArr.length && symbolArr.map((item) => (
        <NumberComponent symbol={item} />
      ))}
    </div>
  )
}



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