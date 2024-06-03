import AppLink, { AppLinkTheme } from '../../../shared/ui/AppLink/AppLink';
import { classNames } from '../../../shared/lib/utils/classNames';
import * as cls from './navbar.module.scss';
import logo from '../../../shared/assets/logo.png'
import avatar from '../../../shared/assets/file.jpg'
import SwitchLang from '../../../widget/SwitchLang/SwitchLang';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
  const [props, setProps] = useState([className]);
  const { t, i18n } = useTranslation();
  return (
    <nav className={cls.nav}>
      <div className={cls.nav__wrap}>
        <img className={cls.nav__logo} src={logo} alt="logo" />
        <ul className={cls.nav__items}>  
          <li>
            <SwitchLang/>
          </li>
          <li className='nav__item'>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
              {t('НавБар.Главная')}
            </AppLink> 
          </li>
          <li className='nav__item'>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
              {t('НавБар.Все наши проекты')}
            </AppLink> 
          </li>
          <li className={cls.avatar}>
              <img src={avatar} alt="avatar" className={cls.avatar__img}/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
