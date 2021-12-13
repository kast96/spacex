import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRocket } from "../../redux/reducer-rocket";
import Preloader from "../Preloader/Preloader";
import Rocket from "./Rocket";
import { withRouter } from "react-router";
import { compose } from 'redux';
import { getStateIsLoading, getStateRocket } from "../../redux/selectors-rocket";

const RocketContainer = React.memo(({rocket, isLoading, getRocket, match}) => {
  useEffect(() => {
    getRocket(match.params.id);
  }, [getRocket, match.params.id]);
  
  return (
    <div>
      <h1>{rocket.name || 'Загрузка...'}</h1>
      {isLoading && <Preloader />}
      {!isLoading && <Rocket rocket={rocket} />}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    rocket: getStateRocket(state),
    isLoading: getStateIsLoading(state)
  }
}

export default compose(
  connect(mapStateToProps, {getRocket}),
  withRouter
)(RocketContainer);
