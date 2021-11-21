import React from 'react';
import Layout from '../../components/layout';

const About = () => (
  <Layout className="About">
    <article className="About-Content">
      <h1>About</h1>
      <p>
        I created this website to teach myself German.
        You can use it too if you like. If you don`t – don`t.
      </p>

      <h2>Impressum</h2>
      <p>
        This website is exempt from "§ 5 TMG" as non-commercial.
        No tracking or logging of any kind.
      </p>
    </article>
  </Layout>
);

export default About;
