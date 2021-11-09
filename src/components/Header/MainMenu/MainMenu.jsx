import s from './MainMenu.module.scss';
import {NavLink} from 'react-router-dom';

const MainMenu = () => {
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
          <button className={s.menu__burger}></button>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
