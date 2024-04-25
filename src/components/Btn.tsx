import * as btns from '../scss/btns.module.scss'
import { classNames } from '../utils/classNames';
type BtnProps = {
  children?: React.ReactNode
};
const Btn: React.FC<BtnProps> = ({children}) => {
  return <button className={classNames(btns.calculate__btn, {}, [btns.calculate__btn_number])}>{children}</button>;
};

export default Btn;
