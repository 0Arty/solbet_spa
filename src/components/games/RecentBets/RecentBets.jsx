import Table from '../../home/latest-activities/table/Table'
import coin from '../../../assets/main/coin.svg'
import style from './RecentBets.module.scss'

const RecentBets = () => {
  const titles = [
    'TICKET',
    'PLAYER',
    'BET ID',
    'PAYOUT',
    'PROFIT'
  ]
  
  const data  = [
    {
      game:{
        title: "A"
      },
      player : 'BESSIE COOPER',
      id : '30320267096',
      payout: '1.70X',
      profit: {
        img: coin,
        title: '+ 0.71150'
      }
    },
    {
      game:{
        title: "B"
      },
      player : 'ELEANOR PENA',
      id : '30320267096',
      payout: '2.21X',
      profit: {
        img: coin,
        title: '+ 3.12150'
      }
    },
    {
      game:{
        title: "B"
      },
      player : 'CODY FISHER',
      id : '30320267096',
      payout: '4.01X',
      profit: {
        img: coin,
        title: '+ 0.31210'
      }
    },
    {
      game:{
        title: "C"
      },
      player : 'ARLENE MCCOY',
      id : '30320267096',
      payout: '1.11X',
      profit: {
        img: coin,
        title: '- 0.32150',
        red: true,
      }
    },
    {
      game:{
        title: "A"
      },
      player : 'LESLIE ALEXANDER',
      id : '30320267096',
      payout: '2.00X',
      profit: {
        img: coin,
        title: '+ 0.2312'
      }
    },
  ]
  
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <p>RECENT BETS</p>
      </div>
      <div className={style.tableWrapper}>
        <Table titles={titles} data={data} />
      </div>
    </div>
  )
}

export default RecentBets