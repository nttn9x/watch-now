import { Typography } from "@hello/components/atoms";

const styles = {
  root: "flex items-center justify-center border-slate-700 border-t-8 p-12 mt-24",
  author: "text-primary-500 font-semibold ml-1",
};

function Footer() {
  return (
    <footer className={styles.root}>
      <Typography variant="body">Made with ♥ by</Typography>
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
