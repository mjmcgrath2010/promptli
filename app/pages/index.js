import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import CommonButton from '../components/common/CommonButton'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <div className="hero">
        <section className="hero-container">
          <img
            style={{ margin: '15% auto 1em', width: '350px', display: 'block', position: 'relative' }}
            alt="logo"
            src="../static/logos/promptli-white.png"
          />
          <h2 className="description">We're focused on the logistics, so you don't have to be.</h2>
          <h3 className="description">Online booking made easy.</h3>
          <div className="hero-cta">
            <CommonButton
              text="Start for free"
              onClick={() => {
                router.push('/create-account')
              }}
            />
          </div>
        </section>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #fff;
          background: url('/static/backgrounds/city-background.jpg');
          height: 100vh;
          position: absolute;
          background-size: cover;
          top: 0;
          z=index: 1;
        }
        .hero-container {
          width: 100%;
          background: rgba(0, 0, 0, 0.2);
          height: 100vh;
          position: absolute;
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

        .hero-cta {
          width: 100%;
          position: relative;
          display: block;
          margin: 3em auto;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Home
