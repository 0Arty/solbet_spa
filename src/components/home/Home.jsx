import style from "./Home.module.scss"
import HowItWork from "./how-it-work/HowItWork";
import FutureGames from "./future-games/FutureGames";
import Preview from "./preview/Preview";
import Partners from "./partners/Partners";
import AvailableGames from "./available-games/AvailableGames";
import LevelUp from "./level-up/LevelUp";
import BiggestWinners from "./biggest-winners-tooday/BiggestWinners";

const Home = ({props}) => {

  return (
    <div className = {style.wrapper}>
      <Preview />
      <HowItWork />
      <FutureGames />
      <Partners />
      <AvailableGames />
      <LevelUp />
      <BiggestWinners />
    </div>
  )
};

export default Home;
