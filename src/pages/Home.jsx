import style from '../components/home/Home.module.scss'
import Footer from "../components/footer/Footer";
import AvailableGames from "../components/home/available-games/AvailableGames";
import BiggestWinners from "../components/home/biggest-winners-tooday/BiggestWinners";
import CommonQuestions from "../components/home/common-questions/CommonQuestions";
import FutureGames from "../components/home/future-games/FutureGames";
import HowItWork from "../components/home/how-it-work/HowItWork";
import Icons from "../components/home/icons/Icons";
import LatestActivities from "../components/home/latest-activities/LatestActivities";
import LevelUp from "../components/home/level-up/LevelUp";
import Partners from "../components/home/partners/Partners";
import Preview from "../components/home/preview/Preview";
import SendEmail from '../components/footer/send-email/SendEmail';
import Heading from '../components/home/available-games/heading/Heading';

const Home = () => {

  return (
    <div className={style.wrapper}>
      <Preview />
      <HowItWork />
      <FutureGames />
      <Partners />
      <AvailableGames>
        <Heading />
      </AvailableGames>
      <LevelUp />
      <BiggestWinners />
      <Icons />
      <LatestActivities />
      <CommonQuestions />

      <Footer children={<SendEmail />} />
      {/* <Footer children={<SendEmail />}/> */}
    </div>
  )
};

export default Home;
