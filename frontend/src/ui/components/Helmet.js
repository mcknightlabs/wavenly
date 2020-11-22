import React, { Component } from "react";
import { render } from "react-dom";
import Helmet from "react-helmet";

class Helmet extends Component {
  render() {
    <main>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Reed</title>
        <meta
          name="description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Reed" />
        <meta
          itemprop="description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />
        <meta
          itemprop="image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://reedbarger.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reed" />
        <meta
          property="og:description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />
        <meta
          property="og:image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reed" />
        <meta
          name="twitter:description"
          content="Articles, tips, and insights aimed at making you a world-class developer, designer, and beyond."
        />
        <meta
          name="twitter:image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />
      </Helmet>
      <div>{/* app content... */}</div>
    </main>
  );
}

export default Helmet;