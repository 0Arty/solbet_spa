import style from "./LatestActivities.module.scss"
import tableStyle from "./table/Table.module.scss"

import bcGround from '../../../assets/main/latest activities/Frame.png'
import Table from "./table/Table";
// assets
import game1 from '../../../assets/main/latest activities/game/fishing disco.svg';
import ic1 from '../../../assets/main/latest activities/coins/ic1.svg';
import game2 from '../../../assets/main/latest activities/game/ninjsx.svg';
import ic2 from '../../../assets/main/latest activities/coins/ic2.svg';
import game3 from '../../../assets/main/latest activities/game/dragon gate.svg';
import ic3 from '../../../assets/main/latest activities/coins/ic3.svg';
import game4 from '../../../assets/main/latest activities/game/king of glory.svg';
import ic4 from '../../../assets/main/latest activities/coins/ic4.svg';
import game5 from '../../../assets/main/latest activities/game/dice.svg';
import ic5 from '../../../assets/main/latest activities/coins/ic5.svg';
import game6 from '../../../assets/main/latest activities/game/lol.svg';
import ic6 from '../../../assets/main/latest activities/coins/ic6.svg';

const LatestActivities = () => {

  const titles = [
    'GAME',
    'PLAYER',
    'BET ID',
    'PAYOUT',
    'PROFIT'
  ]
  
  const data  = [
    {
      game:{
        img: game1,
        title: "Fishing Disco"
      },
      player : 'BESSIE COOPER',
      id : '30320267096',
      payout: '0.70X',
      profit: {
        img: ic1,
        title: '+ 0.00312150'
      }
    },
    {
      game:{
        img: game2,
        title: "Ninjax"
      },
      player : 'ELEANOR PENA',
      id : '30320267096',
      payout: '2.21X',
      profit: {
        img: ic2,
        title: '+ 0.00312150'
      }
    },
    {
      game:{
        img: game3,
        title: "Dragon Gate"
      },
      player : 'CODY FISHER',
      id : '30320267096',
      payout: '3.01X',
      profit: {
        img: ic3,
        title: '+ 0.00312150'
      }
    },
    {
      game:{
        img: game4,
        title: "King of Glory"
      },
      player : 'ARLENE MCCOY',
      id : '30320267096',
      payout: '1.11X',
      profit: {
        img: ic4,
        title: '- 0.00312150',
        red: true,
      }
    },
    {
      game:{
        img: game5,
        title: "Dice"
      },
      player : 'LESLIE ALEXANDER',
      id : '30320267096',
      payout: '0.00X',
      profit: {
        img: ic5,
        title: '+ 0.00312150'
      }
    },
    {
      game:{
        img: game6,
        title: "League of Legends"
      },
      player : 'THERESA WEBB',
      id : '30320267096',
      payout: '3.19X',
      profit: {
        img: ic6,
        title: '+ 0.00312150'
      }
    },
  
  ]

    return (
        <div className={style.box}>
            <div className={style.bc_ground}>
                <img src={bcGround} alt="" />
            </div>


            <div className={style.content}>
                <div className = {style.heading}>
                    <div className={style.text}>
                        <h2>Latest Activites</h2>
                        <p>Each time you reach a new level you'll get a reward</p>
                    </div>
                    <div className = {style.toggler}>
                            <div className = {style.bets}>bets</div>
                            <div className = {style.contest} >contest</div>
                    </div>
                </div>


              <div className={tableStyle.additionalWrapper}>
                <Table titles={titles} data={data} />
              </div>
            </div>

        </div>
    )
};

export default LatestActivities;
