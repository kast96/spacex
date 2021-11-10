import s from './MobileMainMenu.module.scss';
import {NavLink} from 'react-router-dom';

const MobileMainMenu = (props) => {
  const onClickClose = () => {
    props.closeMobileMenu();
  }

  return (
    <>
    {props.isOpenedMobileMenu === true &&
      <div className={s.contianer}>
        <button className={s.menu__close} onClick={onClickClose}></button>
        <nav className={s.menu}>
          <ul className={s.menu__ul}>
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/rockets/">Ракеты</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    }
    </>
  );
}

export default MobileMainMenu;
