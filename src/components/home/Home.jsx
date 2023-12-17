import style from "./Home.module.scss"
import HowItWork from "./how-it-work/HowItWork";
import FutureGames from "./future-games/FutureGames";
import Preview from "./preview/Preview";
import Partners from "./partners/Partners";

const Home = ({props}) => {

  return (
    <div className = {style.wrapper}>
      <Preview />
      <HowItWork />
      <FutureGames />
      <Partners />
    </div>
  )
};

export default Home;