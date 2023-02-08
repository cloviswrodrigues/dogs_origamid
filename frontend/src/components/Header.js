import { ReactComponent as LogoSVG } from "../assets/dogs.svg";
import { ReactComponent as UserSVG } from "../assets/usuario.svg";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <LogoSVG />
      <div>
        <span>Login / Criar</span>
        <UserSVG />
      </div>
    </header>
  );
};

export default Header;
