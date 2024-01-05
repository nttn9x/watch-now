import React from "react";
import { Typography } from "@hello/components";

const styles = {
  root: "flex items-center justify-center border-t-8 p-12",
  author: "text-primary-500 font-semibold ml-1",
};

function Footer() {
  return (
    <footer className={styles.root}>
      <Typography variant="h6">Made with ♥ by</Typography>
      <a
        className={styles.author}
        target="open"
        href="https://thor-meeting-client.onrender.com/portfolio"
      >
        Nguyen
      </a>
    </footer>
  );
}

export default Footer;
