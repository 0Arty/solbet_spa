import style from './TotalJackpot.module.scss';
import { NumberComponent } from './NumberComponent'

export const TotalJackpotComponent = ({ amount }) => {
  const symbolArr = ['€' ,...amount.split('')]
  
  return (
    <div className={style.jackpotWrapper}>
      {!!symbolArr.length && symbolArr.map((item, index) => (
        <div key={`symbol-${index}`}><NumberComponent symbol={item} index={index} /></div>
      ))}
    </div>
  )
}