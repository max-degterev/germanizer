import React from 'react';
import Layout from '../../components/layout';

import Adjectives from './adjectives';
import PossessivePronouns from './possessive_pronouns';
import ReflexivePronouns from './reflexive_pronouns';
import ArticleCases from './article_cases';

const Help = () => (
  <Layout className="Help">
    <article className="Help-Content">
      <h1>Help</h1>

      <Adjectives />
      <PossessivePronouns />
      <ReflexivePronouns />
      <ArticleCases />
    </article>
  </Layout>
);

export default Help;
