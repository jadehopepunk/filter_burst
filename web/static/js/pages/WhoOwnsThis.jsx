import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router'

const WhoOwnsThis = () => (
  <div>
    <h2 className={css(styles.pageHeading)}>
      We envisage a platform owned by it's stakeholders
    </h2>
    <p>
      Right now this is just an experiment, and during this
      phase, we're committed to the following.
    </p>
    <ul>
      <li>All software developed is <a href="https://github.com/craigambrose/filter_burst">open source</a></li>
      <li>If it doesn't work out, we'll delete all private user data.</li>
    </ul>
    <p>
      However, if things are succesful, we'd envisage this service
      being a <a href="http://platformcoop.net/">platform cooperative</a>,
      owned by a diverse group of stakeholders.
    </p>
    <p>
      We're not anti-business, and we'd certainly like to build
      a team of well-paid staff. The traditional route for startups
      though creates too much pressure to build walled gardens locking
      in consumers, to sell customer data without their informed
      consent, and to avoid devoping the software in a way that
      benefits society.
    </p>
    <p>
      Instead, a foundation designed to steward the development
      of social networking that serves everyone's needs would create
      and important global resource for communication, much like
      wikipedia does for knowledge.
    </p>
    <p>
      <Link to="/">&lt; Back to Feed</Link>
    </p>
  </div>
);

const styles = StyleSheet.create({
  pageHeading: {
    fontSize: '170%',
    marginTop: 0,
  }
})

export default WhoOwnsThis;
