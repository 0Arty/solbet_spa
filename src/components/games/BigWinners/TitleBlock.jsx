import style from './BigWinners.module.scss';

export const TitleBlock = () => {
  return <div className={style.titleWrapper}>
    <div className={style.title}>
      <p>Recent Big </p>&nbsp;
      <p className={style.blue}>Winners</p>
    </div>
    <div className={style.subtitle}>
      <p>We update our site regularly; more and more winners are added every day! To locate the most recent winner's
        information</p>
    </div>
  </div>
}