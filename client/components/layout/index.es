import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  const { children } = props;
  const className = classNames('Layout', props.className);

  return (
    <section className={className}>
      <div className="Layout-Content">
        <header className="Layout-Header">
          <Link to="/" className="Layout-Logo">Germanizer</Link>
          <nav>
            <Link className="ui-button ui-button-primary" to="/help">Help</Link>
            <Link className="ui-button ui-button-primary" to="/about">Impressum</Link>
          </nav>
        </header>
        {children}
      </div>
      <footer className="Layout-Footer">
        <a
          href="http://creativecommons.org/publicdomain/zero/1.0/"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Creative Commons CC0
        </a>
        {' '}&bull;{' '}
        No tracking or logging of any kind.
      </footer>
    </section>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
