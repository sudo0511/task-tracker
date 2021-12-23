import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showBtn }) => {
  // console.log(onAdd);
  return (
    <header>
      <h1>{title}</h1>
      <Button
        onclick={onAdd}
        color={showBtn ? "red" : "green"}
        text={showBtn ? "Close" : "Add"}
      />
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
