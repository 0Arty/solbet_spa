import style from "./AvailableGames.module.scss"
import Game from "./games/Game"

const AvailableGames = ({ children }) => {

  return (
    <div className={style.container}>
      {children}
      <div className={style.games}>
        <Game />
        <Game />
        <Game />
      </div>
    </div>
  )
};

export default AvailableGames;
