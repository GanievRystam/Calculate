// import Canvas from './components/Canvas';
import Btn from './components/Btn';
// import * as  styles from './assets/css/index.module.scss';
import * as  btns from './scss/btns.module.scss';
import Input from './components/Input';
import ThemeContext from './store/context';
import { useContext } from 'react';
import { classNames } from './utils/classNames';
// import { allOper } from './store/store';

const App = () => {
  const {numbers,operations, input} = useContext(ThemeContext);
  return (
    <div className="main">
      <div className={'btns.container'}>
        <div className={btns.calculate}>
          <Input cls={btns.calculate__input} value={input}/>
          <div className={btns.operations}>
            {operations.map((item) => {
              return  <Btn>{item}</Btn>
            })}
          </div>
          <div className={btns.calculate__number}>
          {numbers.reverse().map((item) => {
              return  <Btn>{item}</Btn>
            })}
          </div>
          <div className={btns.calculate__bottom}>
            <button className={classNames(btns.calculate__btn, {}, [btns.calculate__btn_null])}>0</button> 
            <Btn>,</Btn>
          </div>
          <div className=''>
            <button className={classNames(btns.calculate__btn, {}, [btns.calculate__btn_ravno])}>=</button> 
          </div>
        </div>
        <div className="constructor"></div>
      </div>
    </div>
  );
};
export default App;
