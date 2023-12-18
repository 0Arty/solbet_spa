import style from "./Home.module.scss"
import HowItWork from "./how-it-work/HowItWork";
import FutureGames from "./future-games/FutureGames";
import Preview from "./preview/Preview";
import Partners from "./partners/Partners";
import AvailableGames from "./available-games/AvailableGames";
import LevelUp from "./level-up/LevelUp";
import BiggestWinners from "./biggest-winners-tooday/BiggestWinners";
import Icons from "./icons/Icons";
import LatestActivities from "./latest-activities/LatestActivities";
import CommonQuestions from "./common-questions/CommonQuestions";
import Footer from "../footer/Footer";
import SendEmail from "../send-email/SendEmail";
import Retweet from "../retweet-and-get/Retweet";

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
      <Icons />
      <LatestActivities />
      <CommonQuestions />


      <Footer children={<Retweet />}/>
      {/* <Footer children={<SendEmail />}/> */}
    </div>
  )
};

export default Home;
