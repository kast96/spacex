import { Link } from "react-router-dom";
import s from "./Breadcrumb.module.scss";

const Breadcrumbs = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <div className={s.breadcrumb}>
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span className={s.breadcrumb__item} key={key}>
            {name}
          </span>
        ) : (
          <>
            <Link className={s.breadcrumb__item} key={key} to={path}>
              {name}
            </Link>
            <span className={s.breadcrumb__arrow}>{'>'}</span>
          </>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;