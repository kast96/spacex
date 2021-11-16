import Rocket from "./Rocket";

const Rockets = ({rockets}) => {
  console.log(rockets);
  return (
    <div>
      {rockets.map((rocket, index) => <Rocket key={index} rocket={rocket} />)}
    </div>
  );
}

export default Rockets;
