import style from "./Footer.module.css";
import { ReactComponent as LogoSVG } from "../assets/dogs.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <LogoSVG />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
