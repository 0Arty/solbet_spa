import style from "./Table.module.scss"
import TableRow from "./table-row/TableRow"
import classNames from 'classnames'

const Table = ({titles, data}) => {
  
  return (
    <div className={style.wrapper}>
      <table className={style.latest_table}>
        <thead>
        <tr>
          {!!titles.length && titles.map((title, index) =>
            <td className={classNames(!index && style.start)}>{title}</td>
          )}
        </tr>
        </thead>
        <tbody>
        {!!data.length && data.map((item) => <TableRow data={item}/>)}
        </tbody>
      </table>
    </div>
  )
};

export default Table;
