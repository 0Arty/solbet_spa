import header from '../../assets/main/games-page/header.svg'
import style from "./Games.module.scss"
import AvailableGames from '../../components/home/available-games/AvailableGames'
import CardsTitle from '../../components/games/CardsTitle'
import LatestActivities from '../../components/home/latest-activities/LatestActivities'
import LevelUp from '../../components/home/level-up/LevelUp'
import Footer from '../../components/footer/Footer'
import Retweet from '../../components/footer/retweet-and-get/Retweet'

const Games = () => {
  return (
    <div className={style.wrapper}>
      <img src={header} alt="" className={style.image} />
      <AvailableGames><CardsTitle /></AvailableGames>
      <LatestActivities />
      <LevelUp />
      <Footer children={<Retweet />} />
    </div>
  )
}

export default Games