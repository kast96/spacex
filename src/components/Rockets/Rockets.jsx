import RocketItem from "./RocketItem.jsx";

const Rockets = ({rockets}) => {
  return (
    <div>
      {rockets.map(rocket => <RocketItem key={rocket.id} rocket={rocket} />)}
    </div>
  );
}

export default Rockets;
