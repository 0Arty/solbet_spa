import style from "./Partners.module.scss"
import { ReactComponent as PaydiumSvg } from "../../../assets/main/partner/paydium.svg";
import { ReactComponent as SolanaSvg } from "../../../assets/main/partner/solana.svg";
import { ReactComponent as CoinGeckoSvg } from "../../../assets/main/partner/CoinGecko.svg";

const Partners = ({props}) => {

  return (
    <div className = {style.container}>
            <h2>OUR PARTNERS </h2>
          <div className = {style.list}>
              <PaydiumSvg className = {style.svg}/>
              <SolanaSvg className = {style.svg}/>
              <CoinGeckoSvg className = {style.svg}/> 
          </div>
    </div>
  )
};

export default Partners;
