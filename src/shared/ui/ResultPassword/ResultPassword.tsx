import * as cls from './ResultPassword.module.scss';
import Copy from "../../assets/copy-svgrepo-com.svg";
interface ResultPasswordProps{
    passwords: string[]
}
const ResultPassword = ({passwords}:ResultPasswordProps) => {
    return(
        <div className={cls.result}>
            {passwords.map(password => {
                return <div key={password}  className={cls.result__password}> <span>{password}</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            })}
            {/* <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div>
            <div className={cls.result__password}> <span>dfadfafdadsfd</span> <img className={cls.result__copy} src={Copy} alt="copy" /></div> */}
        </div>
    )
}

export default ResultPassword;