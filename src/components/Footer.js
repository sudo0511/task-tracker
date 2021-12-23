import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <b>Copyright &copy; 2021</b>
      <br />
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
