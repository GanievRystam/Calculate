// import Canvas from './components/Canvas';
import Btn from './components/Btn';
import * as  styles from './assets/css/index.module.scss';
import * as  btns from './scss/btns.module.scss';
const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="calculate">
          <h1 className={styles.green}>HTL</h1>
          <input className={btns.calculate__input} type="number" />
          <div className="operations">
            <Btn />
            <Btn />
            <Btn />
            <Btn />
          </div>
          <div className="calculate__number">
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
            <Btn />
          </div>
          <div className="calculate__bottom">
            <Btn /> 
            <Btn /> 
          </div>
          <Btn />
        </div>
        <div className="constructor"></div>
      </div>
    </div>
  );
};
export default App;
