import style from './BigWinners.module.scss';
import label from '../../../assets/main/games-page/label.svg'
import firstPlace from '../../../assets/main/games-page/1stPlace.svg'
import secondPlace from '../../../assets/main/games-page/2ndPlace.svg'
import thirdPlace from '../../../assets/main/games-page/3rdPlace.svg'
import player2 from '../../../assets/main/games-page/player2.svg'
import player3 from '../../../assets/main/games-page/player3.svg'
import player4 from '../../../assets/main/games-page/player4.svg'
import rightArrow from '../../../assets/main/icons/rightArrow.svg'


const data = [
  {
    placeImg: firstPlace,
    player: {
      img: player2,
      name: 'Bessie Cooper',
    },
    lastWin: '56.65994'
  },
  {
    placeImg: secondPlace,
    player: {
      img: player3,
      name: 'Jerome Bell',
    },
    lastWin: '56.65994'
  },
  {
    placeImg: thirdPlace,
    player: {
      img: player4,
      name: 'Darrell Steward',
    },
    lastWin: '56.65994'
  }
]

const PlayerProfile = ({item}) => {
  return (
    <div className={style.profileCard}>
      <img src={item.placeImg} alt={''}/>
      <div className={style.playerInfo}>
        <img src={item.player.img} alt={''}/>
        <p>{item.player.name}</p>
      </div>
      <button>
        <p>+</p>
        <p>{item.lastWin}</p>
        <p className={style.white}>ETH</p>
        <img src={rightArrow} alt={''}/>
      </button>
    </div>
  )
}

export const RecentWindCard = () => {
  return (
    <div className={style.recentWinsCard}>
      <img className={style.centering} src={label} alt={'Recent Wins'}/>
      <div className={style.playersBlock}>
        {!!data.length && data.map((item, index) =>
          <div key={`player-${index}`}>
            <PlayerProfile item={item}/>
          </div>
        )}
      </div>
    </div>
  )
}
