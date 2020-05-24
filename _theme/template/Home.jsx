import React from 'react';
import { Link } from 'react-router';
require('../static/style');

export default function Home() {

  return (
    <div className="home">
      <div className="home-content">
        <h3>react ui</h3>
        <div className="home-link">
          <a
              href="https://github.com/lizuncong/antd-learn"
              className="github"
              target="_blank"
          >
            GitHub
          </a>
          <Link className="start" to="/articles">
            Get Started
          </Link>
        </div>
        <div className="slogan">
          React组件库，仅供学习
        </div>
      </div>
    </div>
  )
}
