import React from 'react';

const App = (props) => (
  <div className="container">
    <header className="header">
      <nav role="navigation">
        <ul className="nav nav-pills pull-right">
          <li><a href="http://www.phoenixframework.org/docs">Get Started</a></li>
        </ul>
      </nav>
      <span className="logo"></span>
    </header>
    {props.children}
  </div>
);

export default App;
