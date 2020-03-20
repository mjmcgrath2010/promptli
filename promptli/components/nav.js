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
            color: rgba(43, 23, 147, 1);
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
            color: rgba(43, 23, 147, 1);
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
            cursor: pointer;
            color: rgba(43, 23, 147, 1);
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
