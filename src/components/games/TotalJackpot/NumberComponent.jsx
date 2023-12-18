import style from './TotalJackpot.module.scss';

export const NumberComponent = ({symbol, index}) => {
  return (
    <div className={style.numberEl} key={`numberComponent-${index}`}>
      <p>{symbol}</p>
    </div>
  )
}
