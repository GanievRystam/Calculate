import { useState } from "react";
import MainBtn from "../../../shared/ui/mainBtn/MainBtn";
import * as cls from './generationForm.module.scss'
import ListAttributes from "../../../shared/ui/ListAttributes/ListAttributes";
import BlockMainText from "../../../widget/BlockMainText";
const GenerationForm = () => {
    const [lengthInput, setLengthInput] = useState(8);
    function handlerInput(e:any) {
        setLengthInput(e.target.value);
    }
    return (
        <div className={cls.form}>
            <div>
                <h1 className={cls.main_header}>Генератор паролей</h1>
                <BlockMainText/>
            </div>
            <form className={cls.form} action="">
                <label htmlFor="#number" className={cls.form__label}>Длина пароля</label>
                <input id="number" className={cls.form__count} type="number" value={lengthInput} onChange={(e)=> handlerInput(e)}/>
                <ListAttributes/>
                <MainBtn/>
            </form>
        </div>
    )
}

export default GenerationForm;