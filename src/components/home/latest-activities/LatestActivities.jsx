import style from "./LatestActivities.module.scss"

import bcGround from '../../../assets/main/latest activities/Frame.png'
import Table from "./table/Table";

const LatestActivities = ({ props }) => {

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


                <Table />
            </div>

        </div>
    )
};

export default LatestActivities;
