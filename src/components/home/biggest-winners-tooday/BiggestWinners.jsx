import style from "./BiggestWinners.module.scss"
import todaysWinnerBG from '../../../assets/main/todaysWinner/Todays winner.svg'
import ribbon from '../../../assets/main/todaysWinner/ribbon.svg'
import Cell from "./cell/Cell";
import position1 from '../../../assets/main/todaysWinner/Aset1.png'
import position2 from '../../../assets/main/todaysWinner/Aset2.png'
import position3 from '../../../assets/main/todaysWinner/Aset3.png'

import logo1 from '../../../assets/main/todaysWinner/Image1.svg'
import logo2 from '../../../assets/main/todaysWinner/Image2.png'
import logo3 from '../../../assets/main/todaysWinner/Image3.png'
import salute from '../../../assets/main/todaysWinner/Frame.svg'
import trophy from '../../../assets/main/todaysWinner/trophy.png'

const BiggestWinners = ({ props }) => {

    return (
        <div className={style.wrapper}>
            <img src={todaysWinnerBG} alt="" className={style.bg_image} />

            <div className={style.container}>

                <div className={style.title}>
                    <h2>Biggest<span> Winners </span>today</h2>
                    <button>Start Playing!</button>
                </div>

                <img src={trophy} alt="" className={style.trophy} />

                <div className={style.table}>
                    <img src={ribbon} alt="" className={style.ribbon} />
                    <div className={style.cells}>
                        <img src={salute} alt="" className={style.salute} />
                        <Cell img={position1} logo={logo1} name={'BESSIE COOPER'} />
                        <Cell img={position2} logo={logo2} name={'JEROME BELL'} />
                        <Cell img={position3} logo={logo3} name={'DARRELL STEWARD'} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BiggestWinners;
