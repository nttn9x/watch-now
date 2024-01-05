import React from "react";

import Header from "./header.component";
import Footer from "./footer.component";
import { Outlet } from "react-router-dom";

const styles = {
  root: "bg-white dark:bg-black h-full overflow-auto flex flex-col",
  content: "flex-1",
};

function Layout() {
  return (
    <main data-testid="main" className={styles.root}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
