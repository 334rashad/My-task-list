import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e.clientX);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick}></Button>
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
