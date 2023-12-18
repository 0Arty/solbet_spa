import style from "./CommonQuestions.module.scss"
import Question from "./question/Question";
import frame from '../../../assets/main/question/frame.svg'


const CommonQuestions = ({props}) => {

  return (
    <div className = {style.container}>
        <h2>Our most common questions</h2>
        <p>Do you have a question about gainio? Please contact us! We would love to answer your questions.</p>
        <div className = {style.questBlock}>
            <Question text={'Question?'} answer={'1 Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.'}/>
            <Question text={'Question?'} answer={'2 Duis sapien justo, posuere interdum mauris eu, '}/>
            <Question text={'Question?'} answer={'3 Duis sapien justo, posuere interdum mauris eu, '}/>
            <Question text={'Question?'} answer={'4 Duis sapien justo, posuere interdum mauris eu,'}/>
            <Question text={'Question?'} answer={'5 Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.'}/>
            <Question text={'Question?'} answer={'6 Duis sapien justo, posuere interdum mauris eu, tincidunt placerat ante. Curabitur aliquet leo ipsum, at maximus dolor fringilla vel. Aliquam sagittis elementum volutpat. Vestibulum vel arcu nisl.'}/>
        
        
        </div>
        <img src={frame} alt="" className = {style.icon}/>
    </div>
  )
};

export default CommonQuestions;
