import React from "react";
import '../Ball.css';
import '../App.css'
interface BallProps {
  number: number;
}
const Ball: React.FC<BallProps> =({number}) => {
  return <div className="ball">{number}</div>;
};

export default Ball;