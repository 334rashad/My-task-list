import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello"></Button>
      <Button color="blue" text="New"></Button>
      <Button color="red" text="App"></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task List Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS inside js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };

export default Header;
