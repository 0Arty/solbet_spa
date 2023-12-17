import style from "./LevelUp.module.scss"

import computer from '../../../assets/main/level up/computer.svg'

import bonuses from '../../../assets/main/level up/bonuses.svg'
import freeSpins from '../../../assets/main/level up/freeSpins.svg'
import tournaments from '../../../assets/main/level up/tournaments.svg'
import Element from "./element/Element"


const LevelUp = ({ props }) => {

    return (
        <div className={style.container}>
            <img src={computer} alt="" className = {style.background_image}/>
            <div className={style.content}>
                <h2>LEVEL UP! GET REWARDS</h2>
                <p>Each time you reach a new level you'll get a reward</p>
                <div className={style.list}>

                    <Element img={freeSpins } text={'freespins'}/>
                    <Element img={bonuses } text={'bonuses'}/>
                    <Element img={tournaments } text={'tournaments'}/>

                </div>
            </div>

        </div>
    )
};

export default LevelUp;
