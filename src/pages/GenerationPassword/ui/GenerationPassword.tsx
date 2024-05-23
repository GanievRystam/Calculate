import Footer from "../../../widget/Footer";
import Alarm from "../../../shared/ui/Alarm/Alarm";
import BlockMainText from "../../../widget/BlockMainText";
import GenerationForm from "../../../widget/GenerationForm";
import * as cls from './generationPassword.module.scss'
export const GenerationPassword = () => {
    return(
    <>
       <section className={cls.generation}>
            <div className="container">
                <div className={cls.generation_wrap}>
                    <GenerationForm/>
                    <div className={cls.progressBar}>
                        <label htmlFor="progressFill" className={cls.progressBar__label}>Надёжность пароля</label>
                        <div className={cls.progressBar__fill} id="progressFill">
                            <div className={cls.progressBar__overflay}></div>
                        </div>
                    </div>
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
  