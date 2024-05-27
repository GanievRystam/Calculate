import { classNames } from '../../../shared/lib/utils/classNames';
import * as cls from './footer.module.scss'
const Footer = () => {
    return (
        <footer className={cls.footer}>
                <div className="container">
                    {/* <nav className={cls.footer_nav}>
                        <ul className={cls.footer_nav__items}>
                            <li className={cls.footer_nav__item}>
                                <a className={classNames(cls.footer_nav__link, {}, [cls.footer_nav__link_first])} href="#">Возможности сайта</a>
                                <a className={cls.footer_nav__link} href="#">Бот в телеграмм</a>
                                <a className={cls.footer_nav__link} href="#">Бот в телеграмм</a>
                                <a className={cls.footer_nav__link} href="#">Бот в телеграмм</a>
                                <a className={cls.footer_nav__link} href="#">Бот в телеграмм</a>
                            </li>
                        </ul>
                        <ul className={cls.footer_nav__items}>
                            <li className={cls.footer_nav__item}>
                                <a className={classNames(cls.footer_nav__link, {}, [cls.footer_nav__link_first])} href="#">Поддержка</a>
                                <a className={cls.footer_nav__link} href="#">Фу</a>
                                <a className={cls.footer_nav__link} href="#">Фи</a>
                                <a className={cls.footer_nav__link} href="#">Фоу</a>
                                <a className={cls.footer_nav__link} href="#">Нео</a>
                            </li>
                        </ul>
                        <ul className={cls.footer_nav__items}>
                            <li className={cls.footer_nav__item}>
                                <a className={classNames(cls.footer_nav__link, {}, [cls.footer_nav__link_first])} href="#">О нас</a>
                                <a className={cls.footer_nav__link} href="#">Ты о чём</a>
                                <a className={cls.footer_nav__link} href="#">А я о чём</a>
                            </li>
                        </ul>
                    </nav> */}
                    <div className={cls.text_copyright}>MyCompaty.ru © 2024</div>
                </div>
            </footer>
    )
}

export default Footer;