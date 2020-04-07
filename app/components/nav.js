import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

class Nav extends Component {
  render() {
    const { isLoggedIn } = this.props
    return (
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#learn">
              <a>How it Works</a>
            </Link>
          </li>
          <li>
            <Link href="/#learn">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/#learn">
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            ) : (
              <Link href="/login">
                <a>Sign in</a>
              </Link>
            )}
          </li>
        </ul>
        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          }
          nav {
            z-index: 1000;
            background: transparent;
            text-align: center;
            color: #fff;
            position: fixed;
            top: 0;
            width: 100%;
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
            color: #fff;
          }
          a {
            text-decoration: none;
            font-size: 13px;
            cursor: pointer;
            color: #fff;
          }
        `}</style>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
  }
}

export default connect(mapStateToProps, null)(Nav)
