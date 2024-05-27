import Footer from "../../../widget/Footer";
import Alarm from "../../../shared/ui/Alarm/Alarm";
import BlockMainText from "../../../widget/BlockMainText";
import GenerationForm from "../../../widget/GenerationForm";
import * as cls from './generationPassword.module.scss'
import ProgressBar from "../../../shared/ui/progressBar/ProgressBar";
export const GenerationPassword = () => {
    return(
    <>
       <section className={cls.generation}>
            <div className="container">
                <div className={cls.generation_wrap}>
                    <GenerationForm/>
                    <ProgressBar/>
                </div>
            </div>
        </section>
        {/* <section className="cute">
            <div className="container"></div>
        </section>  */}
        <Alarm/>
        <Footer/>
    </>);
  };
  