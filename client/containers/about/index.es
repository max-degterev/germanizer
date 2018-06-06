import React from 'react';
import Layout from '../../components/layout';

const About = () => (
  <Layout className="About">
    <article className="About-Content">
      <h1>About</h1>
      <p>
        I created this website to
        teach <a href="http://max.degterev.me" target="_blank" rel="noopener noreferrer">myself</a> German.
        You can use it too if you like.
        If you don`t – don`t.
      </p>
    </article>
  </Layout>
);

export default About;
