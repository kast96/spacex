import s from './MainMenu.module.scss';
import {NavLink} from 'react-router-dom';

const MainMenu = (props) => {
  const onClickBurger = () => {
    props.openMobileMenu();
  }

  return (
    <nav className={s.menu}>
      <ul className={s.menu__ul}>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/rockets/">Ракеты</NavLink>
        </li>
        <li>
          <button className={s.menu__burger} onClick={onClickBurger}></button>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
