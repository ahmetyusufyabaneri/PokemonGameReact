import "./StartGameButton.css";

const StartGameButton = ({ onClick, buttonTitle }) => {
  return <button onClick={onClick}>{buttonTitle}</button>;
};

export default StartGameButton;
