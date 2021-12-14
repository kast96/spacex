import { Link } from "react-router-dom";
import s from "./Breadcrumb.module.scss";
import { variables } from "../../data/routes/routes";

const Breadcrumb = ({ crumbs, values }) => {
  let resultCrumbs = [];

  crumbs.forEach((element, key) => {
    for (const variableKey in variables) {
      if (element.variable === variables[variableKey]) {
        if (values[variableKey]) {
          element.name = values[variableKey];
        } else {
          continue;
        }
      }
      resultCrumbs[key] = element;
    }
  });

  if (resultCrumbs.length <= 1) {
    return null;
  }

  return (
    <div className={s.breadcrumb}>
      {resultCrumbs.map(({ name, path }, key) =>
        key + 1 === resultCrumbs.length ? (
          <span className={s.breadcrumb__item} key={key}>
            {name}
          </span>
        ) : (
          <span key={key}>
            <Link className={s.breadcrumb__item} to={path}>
              {name}
            </Link>
            <span className={s.breadcrumb__arrow}>{'>'}</span>
          </span>
        )
      )}
    </div>
  );
};

export default Breadcrumb;