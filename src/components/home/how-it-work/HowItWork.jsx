import style from "./HowItWork.module.scss"
import Card from "./card/Card";

import bet from '../../../assets/main/howBlock/bet.svg'
import win from '../../../assets/main/howBlock/win.svg'
import earn from '../../../assets/main/howBlock/earn.svg'

const HowItWork = ({props}) => {

  return (
    <div className = {style.container}>
        <Card img={bet} text={{heading : 'BET', p : 'A huge collection of crypto events',}}/>
        <Card img={win} text={{heading : 'WIN', p : 'Points and cash from playing and competing.',}}/>
        <Card img={earn} text={{heading : 'EARN', p : 'Your SOL or prize money from challenges.',}}/>
    </div>
  )
};

export default HowItWork;
