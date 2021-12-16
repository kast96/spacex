import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStarlinks } from "../../redux/reducer-starlinks";
import { getStateStarlinks, getStateIsLoading } from "../../redux/selectors-starlinks";
import Preloader from "../Preloader/Preloader";
import Starlinks from "./Starlinks";

const StarlinksContainer = React.memo(({starlinks, isLoading, getStarlinks}) => {
  useEffect(() => {
    getStarlinks();
  }, [getStarlinks]);

  const onPageChanged = (pageNubmer) => {
    getStarlinks(pageNubmer);
    //this.props.setCurrentPage(pageNubmer);
  }

  return (
    <div>
      <h1>Starlink</h1>
      {isLoading && <Preloader />}
      {!isLoading && <Starlinks starlinks={starlinks.docs} currentPage={starlinks.page} totalPages={starlinks.totalDocs} onPageChanged={onPageChanged} />}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    starlinks: getStateStarlinks(state),
    isLoading: getStateIsLoading(state)
  }
}

export default connect(mapStateToProps, {getStarlinks})(StarlinksContainer);
