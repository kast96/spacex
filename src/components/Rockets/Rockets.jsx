import RocketList from "./RocketList";

const Rockets = ({rockets}) => {
  return (
    <div>
      {rockets.map(rocket => <RocketList key={rocket.id} rocket={rocket} />)}
    </div>
  );
}

export default Rockets;
