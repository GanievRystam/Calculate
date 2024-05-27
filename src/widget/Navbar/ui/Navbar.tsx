import AppLink, { AppLinkTheme } from '../../../shared/ui/AppLink/AppLink';
import { classNames } from '../../../shared/lib/utils/classNames';
import * as cls from './navbar.module.scss';
import logo from '../../../shared/assets/logo.png'
import avatar from '../../../shared/assets/file.jpg'

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
    console.log(logo)
  return (
    <nav className={cls.nav}>
      <div className={cls.nav__wrap}>
        <img className={cls.nav__logo} src={logo} alt="logo" />
        <ul className={cls.nav__items}>  
          <li className='nav__item'>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
              Main
            </AppLink> 
          </li>
          <li className='nav__item'>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
              Все наши проекты
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
