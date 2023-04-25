import React from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import style from "./Account.module.css";
import { ReactComponent as FeedSvg } from "../../assets/feed.svg";
import { ReactComponent as StatisticsSvg } from "../../assets/estatisticas.svg";
import { ReactComponent as AddSvg } from "../../assets/adicionar.svg";
import { ReactComponent as LogoffSvg } from "../../assets/sair.svg";

import AccountMain from "./AccountMain";
import AccountStatistics from "./AccountStatistics";
import AccountPost from "./AccountPost";
import { UserContext } from "../../Context/UserContext";
import PageNotFound from "../PageNotFound";
import useMedia from "../../Hooks/useMedia";

const Account = () => {
  const [pageTitle, setPageTitle] = React.useState("");
  const mobile = useMedia("(max-width: 64rem)");
  const [showMenuMobile, setShowMenuMobile] = React.useState(true);
  const { userLogout } = React.useContext(UserContext);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setShowMenuMobile(false);
  }, [pathname]);

  function toggleMenuHamburguer() {
    setShowMenuMobile((prevState) => !prevState);
  }

  return (
    <main className={style.account}>
      <section className="container">
        <div className={style.accountHeader}>
          <h1 className="title-1">{pageTitle}</h1>
          {mobile && (
            <button
              className={`${style.buttonHamburger} ${
                showMenuMobile && style.buttonHamburgerActive
              }`}
              onClick={toggleMenuHamburguer}
            ></button>
          )}
          <nav
            className={`${mobile ? style.menuMobile : style.menu} ${
              showMenuMobile && style.menuMobileActive
            }`}
          >
            <NavLink
              to="/conta"
              end
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <FeedSvg />
              {mobile && "Minhas Fotos"}
            </NavLink>
            <NavLink
              to="/conta/estatisticas"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <StatisticsSvg />
              {mobile && "Estatísticas"}
            </NavLink>
            <NavLink
              to="/conta/postar"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <AddSvg />
              {mobile && "Adicionar Foto"}
            </NavLink>
            <button onClick={userLogout}>
              <LogoffSvg />
              {mobile && "Sair"}
            </button>
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={<AccountMain setPageTitle={setPageTitle} />}
          />
          <Route
            path="estatisticas"
            element={<AccountStatistics setPageTitle={setPageTitle} />}
          />
          <Route
            path="postar"
            element={<AccountPost setPageTitle={setPageTitle} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </main>
  );
};

export default Account;
