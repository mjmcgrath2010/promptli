import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <div className="hero">
      <div className="hero-container">
        <img
          style={{ margin: '15% auto 1em', width: '400px', display: 'block', position: 'relative' }}
          alt="logo"
          src="../static/logos/promptli-color.png"
        />
        <h2 className="description">Simplify bookings.</h2>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        background: url('/static/backgrounds/background.png');
        height: 100vh;
        position: fixed;
        background-size: cover;
        top: 0;
        z=index: 1;
      }
      .hero-container {
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        height: 100vh;
        position: fixed;
        top: 0;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
