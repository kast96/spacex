import { connect } from 'react-redux';
import { openMobileMenu } from "../../../redux/reducer-app.js";
import MainMenu from './MainMenu.jsx';

const MainMenuContainer = (props) => {
  return (
    <MainMenu {...props} />
  );
}

export default connect(null, {openMobileMenu})(MainMenuContainer);