import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRockets } from "../../redux/reducer-rockets";
import Preloader from "../Preloader/Preloader";
import Rockets from "./Rockets";

const RocketsContainer = React.memo(({rockets, isLoading, getRockets}) => {
  useEffect(() => {
    getRockets();
  }, [getRockets]);

  return (
    <div>
      <h1>Ракеты</h1>
      {isLoading && <Preloader />}
      {!isLoading && <Rockets rockets={rockets} />}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    rockets: state.rockets.rockets,
    isLoading: state.rockets.isLoading
  }
}

export default connect(mapStateToProps, {getRockets})(RocketsContainer);
