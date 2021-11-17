import Rocket from "./Rocket";

const Rockets = ({rockets}) => {
  return (
    <div>
      {rockets.map(rocket => <Rocket key={rocket.id} rocket={rocket} />)}
    </div>
  );
}

export default Rockets;
