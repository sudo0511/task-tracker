import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onclick = (e) => {
    console.log(e.target);
  };
  return (
    <header>
      <h1>{title}</h1>
      <Button onclick={onclick} color="green" />
    </header>
  );
};

Header.defaultProps = {
  //for default props if no props have been passsed
  title: "Task Tracker",
};

Header.propTypes = {
  //for setting type of props, so if a number is passsed in prop it will render but throw an invalid type error
  title: PropTypes.string.isRequired,
};
export default Header;
