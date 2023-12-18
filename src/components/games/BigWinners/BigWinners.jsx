import style from './BigWinners.module.scss'
import { TitleBlock } from './TitleBlock'
import { WinnerCard } from './WinnerCard'
import { RecentWindCard } from './RecentWindCard';

const BigWinners = () => {
  return (
    <div className={style.wrapper}>
      <TitleBlock />
      <div className={style.cards}>
        <WinnerCard />
        <RecentWindCard />
      </div>
    </div>
  )
}

export default BigWinners