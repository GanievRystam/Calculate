import { Navbar } from "../widget/Navbar/index";
import { GenerationPassword } from "../pages/GenerationPassword";
import './styles/index.scss'
export const App = () => {
  return (
    <div className='app dark'>
      <Navbar/>
        <GenerationPassword />
    </div>
  );
};