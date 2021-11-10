import { connect } from 'react-redux';
import { closeMobileMenu } from "../../../redux/reducer-app.js";
import MobileMainMenu from './MobileMainMenu.jsx';
import { getStateIsOpenedMobileMenu } from '../../../redux/selectors-app.js';

const MobileMainMenuContainer = (props) => {
  return (
    <MobileMainMenu {...props} />
  );
}

const mapStateToProps = (state) => ({
  isOpenedMobileMenu: getStateIsOpenedMobileMenu(state)
});

export default connect(mapStateToProps, {closeMobileMenu})(MobileMainMenuContainer);