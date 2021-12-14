import StarlinkItem from "./StarlinkItem.jsx";

const Starlinks = ({starlinks}) => {
  return (
    <div>
      {starlinks.map(starlink => <StarlinkItem key={starlink.id} starlink={starlink} />)}
    </div>
  );
}

export default Starlinks;
