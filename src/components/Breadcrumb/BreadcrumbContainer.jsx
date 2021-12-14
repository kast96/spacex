import Breadcrumb from "./Breadcrumb";
import { connect } from "react-redux";
import { compose } from 'redux';
import { variables } from "../../data/routes/routes";

const BreadcrumbContainer = ({crumbs, values}) => {
  return (
    <Breadcrumb crumbs={crumbs} values={values} />
  );
}

const mapStateToProps = (state) => {
  const breadcrumbVariables = {};
  for (const key in variables) {
    breadcrumbVariables[key] = state.app.breadcrumbVariables[key];
  }

  return {
    values: breadcrumbVariables
  }
}

export default compose(
  connect(mapStateToProps, {}),
)(BreadcrumbContainer);
