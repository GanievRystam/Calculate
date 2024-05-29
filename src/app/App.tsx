import { Navbar } from "../widget/Navbar/index";
import { GenerationPassword } from "../pages/GenerationPassword";
import './styles/index.scss'
import { Suspense } from "react";
export const App = () => {
  return (
    <div className='app dark'>
      <Suspense fallback='loading'>
        <Navbar/>
        <GenerationPassword />
      </Suspense>
    </div>
  );
};
