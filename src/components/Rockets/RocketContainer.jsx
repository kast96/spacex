import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRocket } from "../../redux/reducer-rocket";
import Preloader from "../Preloader/Preloader";
import Rocket from "./Rocket";
import { withRouter } from "react-router";
import { compose } from 'redux';

const RocketContainer = React.memo(({rocket, isLoading, getRocket, match}) => {
  useEffect(() => {
    getRocket(match.params.id);
  }, [getRocket, match.params.id]);
  
  return (
    <div>
      <h1>{rocket.name || 'Ракета'}</h1>
      {isLoading && <Preloader />}
      {!isLoading && <Rocket rocket={rocket} />}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    rocket: state.rocket.rocket,
    isLoading: state.rocket.isLoading
  }
}

export default compose(
  connect(mapStateToProps, {getRocket}),
  withRouter
)(RocketContainer);
