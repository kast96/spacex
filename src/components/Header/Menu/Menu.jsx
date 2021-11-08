import s from './Menu.module.scss';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
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
  );
}

export default Menu;
