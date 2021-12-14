import s from './MainMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { mainMenu } from '../../../data/menu/mainMenu';

const MainMenu = (props) => {
  const onClickBurger = () => {
    props.openMobileMenu();
  }

  return (
    <nav className={s.menu}>
      <ul className={s.menu__ul}>
        {mainMenu.map((item, key) => (
          <li key={key}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </li>
        ))}
        <li>
          <button className={s.menu__burger} onClick={onClickBurger}></button>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
