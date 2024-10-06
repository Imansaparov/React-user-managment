import { Outlet } from "react-router-dom";

import { styles } from "./styles.ts";

export const Layout = () => {
  return (
      <main className={styles.main}>
        <Outlet />
      </main>
  );
};
