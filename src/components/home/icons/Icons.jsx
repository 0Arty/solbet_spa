import style from "./Icons.module.scss"
import Icon from "./icon/Icon";

import jackpot from '../../../assets/main/icons/jackpot.svg'
import secure from '../../../assets/main/icons/secure.svg'
import support from '../../../assets/main/icons/support.svg'
import total from '../../../assets/main/icons/total.svg'


const Icons = ({props}) => {

  return (
    <div className = {style.container}>
        <Icon img={jackpot} money={'$ 133 501'} title={'Jackpot'} />
        <Icon img={secure} money={'$81 237 619'} title={'Total paid'}/>
        <Icon img={support} money={'100%'} title ={'secure'}/>
        <Icon img={total} money={'24/7'} title={'support'}/>
    </div>
  )
};

export default Icons;
