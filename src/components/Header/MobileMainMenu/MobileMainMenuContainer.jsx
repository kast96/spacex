import { connect } from 'react-redux';
import { closeMobileMenu } from "../../../redux/reducer-app.js";
import MobileMainMenu from './MobileMainMenu.jsx';

const MobileMainMenuContainer = (props) => {
  return (
    <MobileMainMenu {...props} />
  );
}

const mapStateToProps = (state) => ({
  isOpenedMobileMenu: state.app.isOpenedMobileMenu,
});

export default connect(mapStateToProps, {closeMobileMenu})(MobileMainMenuContainer);