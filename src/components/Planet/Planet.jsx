import s from './Planet.module.scss';

const Planet = () => {
  return (
    <div className={s.planet}>
      <div className={s.mars}>
        <div className={s.mars__img}></div>
      </div>
    </div>
  );
}

export default Planet;
