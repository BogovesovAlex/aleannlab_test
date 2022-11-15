import { useLocation } from 'react-router-dom';
import classes from './Layout.module.css';

function Layout({ children, pageId }) {
  const locationId = useLocation().pathname.split('/').slice(-1)[0];

  return (
    <section className={pageId !== locationId ? classes.container : `${classes.container} ${classes.container_details}` }>
      <main className={classes.main}>{children}</main>
    </section>
  );
}

export default Layout;