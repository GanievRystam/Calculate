import { Navbar } from "../widget/Navbar/index";
import { GenerationPassword } from "../pages/GenerationPassword";
import './styles/index.scss'
import { Suspense, useEffect } from "react";
import { AppRouter } from "./provider/router";
import { BugButton } from "./provider/router/ErrorBoundary";
export const App = () => {
  // useEffect(() => {
  //   throw new Error();
  // }, [])
  return (
    <div className='app dark'>
      <Suspense fallback='loading'>
        <Navbar/>
        {/* <BugButton/> */}
        <AppRouter />
      </Suspense>
    </div>
  );
};
