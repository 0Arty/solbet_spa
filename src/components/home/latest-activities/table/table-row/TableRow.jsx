import style from "./TableRow.module.scss"

const TableRow = ({ data }) => {


    // game:{
    //     img: game1,
    //     title: "Fishing Disco"
    // },
    // player : 'BESSIE COOPER',
    // id : '30320267096',
    // payout: '0.70X',
    // profit: {
    //     img: ic1,
    //     title: '+ 0.00312150'
    // }

    return (
        <tr className={style.row}>
            <td>
                <div className={style.game}>
                    <div>
                        <img src={data.profit.img} alt="" />
                    </div>
                    <span>
                        {data.profit.title}

                    </span>
                </div>
            </td>
            <td>{data.player}</td>
            <td>{data.id}</td>
            <td>{data.payout}</td>
            <td>
                <div className={style.profit}>
                    <div>
                        <img src={data.profit.img} alt="" />
                    </div>
                    <span>
                        {data.profit.title}

                    </span>
                </div>
            </td>
        </tr>
    )
};

export default TableRow;
