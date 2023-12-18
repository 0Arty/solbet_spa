import style from "./Retweet.module.scss"
import { ReactComponent as TweeterSVG } from "../../assets/main/footer/retweet/tweeter.svg";

import chest from '../../assets/main/footer/retweet/chest.png'
import rocket from '../../assets/main/footer/rocket.svg'

const Retweet = ({props}) => {

  return (
    <div className = {style.box}>
        <img src={chest} alt="" className = {style.left_image}/>
        <div className = {style.content}>
            <h2>
                <TweeterSVG />RETWEET AND GET AIRDROP!
            </h2>
            <p>you need like and retweet. Also leave a comment your SOL wallet address.</p>
            <button>RETWEET</button>
        </div>
        <img src={rocket} alt="" className = {style.right_image}/>
    </div>
  )
};

export default Retweet;
