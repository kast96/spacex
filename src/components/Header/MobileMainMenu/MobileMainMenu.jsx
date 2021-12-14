import s from './MobileMainMenu.module.scss';
import {NavLink} from 'react-router-dom';
import { mainMenu } from '../../../data/menu/mainMenu';

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
            {mainMenu.map((item, key) => (
              <li key={key}>
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    }
    </>
  );
}

export default MobileMainMenu;
