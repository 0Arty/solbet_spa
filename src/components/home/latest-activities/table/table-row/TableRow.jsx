import style from "./TableRow.module.scss"
import classNames from 'classnames';

const TableRow = ({ data }) => {

    return (
        <tr className={style.row}>
            <td>
                <div className={style.game}>
                    <div>
                      {!!data.game.img && <img src={data.game.img} alt=""/>}
                    </div>
                    <span>
                        {data.game.title}

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
                    <span className={classNames(!!data.profit.red ? style.red : style.green)}>
                        {data.profit.title}
                    </span>
                </div>
            </td>
        </tr>
    )
};

export default TableRow;
