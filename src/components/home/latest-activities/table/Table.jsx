import style from "./Table.module.scss"
import TableRow from "./table-row/TableRow";

import game1 from '../../../../assets/main/latest activities/game/fishing disco.svg'
import game2 from '../../../../assets/main/latest activities/game/ninjsx.svg'
import game3 from '../../../../assets/main/latest activities/game/dragon gate.svg'
import game4 from '../../../../assets/main/latest activities/game/king of glory.svg'
import game5 from '../../../../assets/main/latest activities/game/dice.svg'
import game6 from '../../../../assets/main/latest activities/game/lol.svg'

import ic1 from '../../../../assets/main/latest activities/coins/ic1.svg'
import ic2 from '../../../../assets/main/latest activities/coins/ic2.svg'
import ic3 from '../../../../assets/main/latest activities/coins/ic3.svg'
import ic4 from '../../../../assets/main/latest activities/coins/ic4.svg'
import ic5 from '../../../../assets/main/latest activities/coins/ic5.svg'
import ic6 from '../../../../assets/main/latest activities/coins/ic6.svg'

const Table = ({ props }) => {

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
        <div className = {style.wrapper}>

            <table className = {style.latest_table} >
                <thead>
                    <tr>
                        <td className = {style.start}>Game</td>
                        <td>PLAYER</td>
                        <td>BET ID</td>
                        <td>PAYOUT</td>
                        <td>PROFIT</td>
                    </tr>
                </thead>
                <tbody>
                    <TableRow data={data[0]}/>
                    <TableRow data={data[1]}/>
                    <TableRow data={data[2]}/>
                    <TableRow data={data[3]}/>
                    <TableRow data={data[4]}/>
                    <TableRow data={data[5]}/>

                </tbody>
            </table>
        </div>
    )
};

export default Table;
