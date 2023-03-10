import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import style from "./Account.module.css";
import { ReactComponent as FeedSvg } from "../../assets/feed.svg";
import { ReactComponent as StatisticsSvg } from "../../assets/estatisticas.svg";
import { ReactComponent as AddSvg } from "../../assets/adicionar.svg";
import { ReactComponent as LogoffSvg } from "../../assets/sair.svg";

import AccountMain from "./AccountMain";
import AccountStatistics from "./AccountStatistics";
import AccountPost from "./AccountPost";
import { UserContext } from "../../Context/UserContext";

const Account = () => {
  const [pageTitle, setPageTitle] = React.useState("");
  const { userLogout } = React.useContext(UserContext);
  return (
    <main className={style.account}>
      <section className="container">
        <div className={style.accountHeader}>
          <h1 className="title-1">{pageTitle}</h1>
          <nav>
            <NavLink
              to="/conta"
              end
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <FeedSvg />
            </NavLink>
            <NavLink
              to="/conta/estatisticas"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <StatisticsSvg />
            </NavLink>
            <NavLink
              to="/conta/postar"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <AddSvg />
            </NavLink>
            <button onClick={userLogout}>
              <LogoffSvg />
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
        </Routes>
      </section>
    </main>
  );
};

export default Account;
