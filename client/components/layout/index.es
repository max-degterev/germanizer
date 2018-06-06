import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'react-router/lib/Link';

const year = (new Date()).getFullYear();


const Layout = (props) => {
  const { children } = props;
  const className = classNames('Layout', props.className);

  return (
    <section className={className}>
      <div className="Layout-Content">
        <header className="Layout-Header">
          <Link to="/" className="Layout-Logo">Germanizer</Link>
          <nav>
            <Link className="ui-button ui-button-secondary" to="/about">About</Link>
          </nav>
        </header>
        {children}
      </div>
      <footer className="Layout-Footer">&copy; {year} Germanizer </footer>
    </section>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
