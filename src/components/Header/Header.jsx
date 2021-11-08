import s from './Header.module.scss';
import Rocket3d from '../Three/Rocket.jsx';
import Menu from './Menu/Menu.jsx';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div className={s.logo__rocket}>
          <Rocket3d />
        </div>
        <div className={s.logo__text}>SpaceX React</div>
      </div>
      <Menu />
    </header>
  );
}

export default Header;
