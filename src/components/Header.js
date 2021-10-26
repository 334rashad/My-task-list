import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={{ color: "red", backgroundColor: "blue" }}>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task List Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
