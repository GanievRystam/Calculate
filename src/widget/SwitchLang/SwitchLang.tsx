import i18n from '../../shared/config/i18n';
import * as cls from './switchLang.module.scss';
import i18next from 'i18next';
    const changeLanguageHandler = () => {
        i18n.changeLanguage( i18next.language === 'ru' ? "en" : 'ru')
    }
const SwitchLang = () => {
    return(<div className={cls.lang} onClick={changeLanguageHandler}>
        {i18next.language === 'ru' ? "en" : 'ru'}
    </div>)
}
export default SwitchLang;