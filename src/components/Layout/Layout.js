import classes from './Layout.module.css';

function Layout({ children }) {
  return (
    <section className={classes.container}>
      <main className={classes.main}>{children}</main>
    </section>
  );
}

export default Layout;