import { Link } from "react-router-dom";

import { ReactComponent as LogoSVG } from "../assets/dogs.svg";
import { ReactComponent as UserSVG } from "../assets/usuario.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper + " container"}>
        <Link to="/">
          <LogoSVG />
        </Link>
        <div className={style.login}>
          <Link to="/login">Login / Criar</Link>
          <UserSVG />
        </div>
      </div>
    </header>
  );
};

export default Header;
