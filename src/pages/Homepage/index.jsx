import React from "react";
import Directory from "../../components/Directory";
import "./styles.css";
import Layout from "../../components/Layout";
const Homepage = () => {
  return (
    <section className="homepage">
      <Layout>
        <Directory />
      </Layout>
    </section>
  );
};

export default Homepage;
