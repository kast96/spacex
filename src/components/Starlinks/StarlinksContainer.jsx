import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getStarlinks } from "../../redux/reducer-starlinks";
import { getStateStarlinks, getStateIsLoading } from "../../redux/selectors-starlinks";
import Preloader from "../Preloader/Preloader";
import Starlinks from "./Starlinks";
import { withRouter } from "react-router";

const StarlinksContainer = React.memo(({starlinks, isLoading, getStarlinks, match, history}) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(history.location.search);
    const page = (parseInt(urlParams.get('page')) || 1);
    getStarlinks(page);
  }, [getStarlinks, history.location.search]);

  const onPageChanged = (pageNubmer) => {
    getStarlinks(pageNubmer);
    const url = (pageNubmer === 1) ? `${match.path}` : `${match.path}?page=${pageNubmer}`;
    history.push(url);
  }

  return (
    <div>
      <h1>Starlink</h1>
      {isLoading && <Preloader />}
      {!isLoading && <Starlinks starlinks={starlinks.docs} currentPage={starlinks.page} totalPages={starlinks.totalPages} onPageChanged={onPageChanged} />}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    starlinks: getStateStarlinks(state),
    isLoading: getStateIsLoading(state)
  }
}

export default compose(
  connect(mapStateToProps, {getStarlinks}),
  withRouter
)(StarlinksContainer);
