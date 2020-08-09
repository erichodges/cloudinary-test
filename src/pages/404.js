import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Yo duuuuude, the page that you tried to load does not exist.</h1>
  </Layout>
);

export default NotFoundPage;
