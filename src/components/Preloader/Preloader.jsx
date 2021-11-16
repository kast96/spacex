import classNames from 'classnames';
import '../../animations.scss';
import s from './Preloader.module.scss';

const Preloader = () => {
    return (
      <div className={classNames(s.preloader, ['anim-spin'])}></div>
    );
}
  
export default Preloader;