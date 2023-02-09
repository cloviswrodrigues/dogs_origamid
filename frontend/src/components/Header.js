import { ReactComponent as LogoSVG } from "../assets/dogs.svg";
import { ReactComponent as UserSVG } from "../assets/usuario.svg";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper + " container"}>
        <LogoSVG />
        <div className={style.login}>
          <a href="#">Login / Criar</a>
          <UserSVG />
        </div>
      </div>
    </header>
  );
};

export default Header;
