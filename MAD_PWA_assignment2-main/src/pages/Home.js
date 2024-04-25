import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(https://1iz.net/data/media/191/Mumbai_Skyline_at_Night.jpg)` }}>
        <div className="headerContainer">
          <h1>Golden Spice House</h1>
          <p>Mumbai, IN</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
