import StarlinkItem from "./StarlinkItem.jsx";
import Pagenator from "../Pagenator/Pagenator.jsx";

const Starlinks = ({starlinks, currentPage, totalPages, onPageChanged}) => {
  return (
    <div>
      {starlinks.map(starlink => <StarlinkItem key={starlink.id} starlink={starlink} />)}
      <Pagenator currentPage={currentPage} totalPages={totalPages} onPageChanged={onPageChanged} />
    </div>
  );
}

export default Starlinks;
