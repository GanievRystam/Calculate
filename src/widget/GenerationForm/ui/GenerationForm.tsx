import { useState } from "react";
import MainBtn from "../../../shared/ui/mainBtn/MainBtn";
import * as cls from './generationForm.module.scss'
import ListAttributes from "../../../shared/ui/ListAttributes/ListAttributes";
import BlockMainText from "../../../widget/BlockMainText";
import ResultPassword from '../../../shared/ui/ResultPassword/ResultPassword'
import generatePasswords from "../../../shared/lib/generationPassword";
const GenerationForm = () => {
    const [lengthInput, setLengthInput] = useState(8);
    const [passwords, setPasswords] = useState([]);
    const [error, setError] = useState(false)
    const [attributes, setAttributes] = useState([
        { id: 1, checked: false, label: 'Использовать прописные буквы' },
        { id: 2, checked: false, label: 'Использовать строчные буквы' },
        { id: 3, checked: false, label: 'Использовать цифры' },
        { id: 4, checked: false, label: 'Использовать символы: %, *, ), ?, @, #, $, ~' }
      ]);
    function handlerInput(e:any) {
        setLengthInput(e.target.value);
    }
    const handlerBtn = (e:any) => {
        e.preventDefault();
        if(lengthInput < 6) {
            setError(true);
        }else {
            setError(false);
            setPasswords(generatePasswords(lengthInput, attributes[0].checked,attributes[1].checked,attributes[2].checked,attributes[3].checked))
        }
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
                <div className={cls.form__error} style={{height: error? '42px' : '0px'}}>Длина пароля должна состоять минимум из 6 символов</div>
                <ListAttributes attributes={attributes} setAttributes={setAttributes}/>
                <ResultPassword passwords={passwords}/>
                <MainBtn onClick={(e:any) =>{handlerBtn(e)}}/>
            </form>
        </div>
    )
}

export default GenerationForm;