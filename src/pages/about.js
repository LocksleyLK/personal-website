import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

function SidebarContent(props) {
  return (
    <>
      <h2 class="font-bold text-xl mb-2">Books I recommend</h2>
      <ul>
        <li>
          <a
            className="hover:text-green-600 hover:font-semibold"
            target="_blank"
            href="https://news.microsoft.com/hitrefresh/"
          >
            Hit Refresh
          </a>
        </li>
        <li>
          <a
            className="hover:text-green-600 hover:font-semibold"
            target="_blank"
            href="https://swipetounlock.com/"
          >
            Swipe to Unlock
          </a>
        </li>
      </ul>
      <h2 className="font-bold text-xl mt-2 mb-2">Currently reading</h2>
      <ul>
        <li>
          <a
            className="hover:text-green-600 hover:font-semibold"
            target="_blank"
            href="https://brew-u.com/uwashington"
          >
            Morning Brew
          </a>
        </li>
        <li>Oathbringer</li>
      </ul>
      <h2 className="font-bold text-xl mt-2 mb-2">Currently watching</h2>
      <ul>The Mandalorian</ul>
      <h2 className="font-bold text-xl mt-2 mb-2">Teaching</h2>
      <ul>
        <li>STEM League Mentor</li>
        <li>High school math tutor</li>
      </ul>
      <h2 className="font-bold text-xl mt-2 mb-2">Other things</h2>
      <ul>
        <li>I have a twin sister!</li>
        <li>I really like raccoons. And foxes!</li>
        <li>I'm training to climb Mt. St. Helens.</li>
        {/* <li>My favorite Starbucks drink is a chai latte.</li> */}
      </ul>
    </>
  )
}

export default function About() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Locksley Kolakowski</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        <link href="/assets/style.css" rel="stylesheet" />
        {/* <link rel="shortcut icon" type="image/png" href="/static/favicon.png" /> */}
      </Helmet>
      <Layout sidebarContent={<SidebarContent />}>
        <h1 className="font-bold text-3xl">Hello, my name is Locksley!</h1>
        <br />
        <p>
          I am a senior at the University of Washington majoring in{" "}
          <a
            className="hover:text-green-600"
            target="_blank"
            href="https://ischool.uw.edu/programs/informatics"
          >
            Informatics
          </a>{" "}
          and focusing on academic developer advocacy. My technology interests
          include front-end development, C#,{" "}
          <a
            className="hover:text-green-600"
            target="_blank"
            href="https://www.youracclaim.com/badges/db14bad4-06e3-4d92-a0ef-229183d30d24/linked_in_profile"
          >
            Azure
          </a>{" "}
          and{" "}
          <a
            className="hover:text-green-600"
            target="_blank"
            href="https://www.youracclaim.com/badges/27a86749-ee68-472b-9ea4-13d9f33a9af8?source=linked_in_profile"
          >
            AWS
          </a>{" "}
          Fundamentals, and Q#.
        </p>
        <p className="mt-4">
          At UW, I am involved in the developer community as the Hackathon
          Director for{" "}
          <a
            className="hover:text-green-600"
            target="_blank"
            href="https://winfo.ischool.uw.edu/"
          >
            Women in Informatics
          </a>
          . I also serve on the Informatics Admissions Comittee and as an
          Undergraduate Teaching Assistant for INFO 200.
        </p>
      </Layout>
    </div>
  )
}
