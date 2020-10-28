import React, { useState, useEffect } from "react"
import Header from '../components/header'
import MarkdownSample from '../components/markdownSample.mdx'
// import Copyright from '../articles/copyright.mdx'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"

export default function Home() {
  return <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Locksley Kolakowski</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
      {/* <link rel="shortcut icon" type="image/png" href="/static/favicon.png" /> */}
    </Helmet>
    <Navigation />

    <Header />

    {/* <div className="prose prose-sm dark:prose-dark sm:prose lg:prose-lg xl:prose-2xl mx-auto">
      <Copyright />
      <MarkdownSample />
    </div> */}
    <Footer />
  </div>
}
