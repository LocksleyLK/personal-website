import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Form from '../components/form'

function SidebarContent(props) {
  return (
    <>
      <h2 class="font-bold text-xl mb-2">Upcoming Talks</h2>
      <ul>
        <li>Informatics Degree Panel</li>
        <li className="text-xs">Society of Women Engineers | November 19 2020</li>
      </ul>
      <ul className="mt-2">
        <li>Unlocking the Power of Azure with Quantum Computing</li>
        <li className="text-xs"><a href="https://festivetechcalendar.com/" target="_blank" className=" hover:text-green-600">Festive Tech Calendar</a> | December 2020</li>
      </ul>
      <h2 class="font-bold text-xl mt-2 mb-2">Past Talks</h2>
      <ul className="mt-2">
        <li>Anyone can AI with Azure Custom Vision</li>
        <li className="text-xs"><a href="https://www.granitestatecodecamp.org/" target="_blank" className=" hover:text-green-600">Granite State Code Camp</a> | November 14, 2020</li>
      </ul>
      <ul>
        <li>College 101 for Technologists</li>
        <li className="text-xs">Superposition San Jose | November 7, 2020</li>
      </ul>
      <ul className="mt-2">
        <li>Introduction to Cloud Computing</li>
        <li className="text-xs">STEM League | July 29, 2020</li>
      </ul>
      <ul className="mt-2">
        <li>Ignite Student Panel</li>
        <li className="text-xs">University of Washington Information School | Febuary 27, 2020</li>
      </ul>
      <ul className="mt-2">
        <li>Girls Who Code Alumni Panel</li>
        <li className="text-xs">Adobe, Seattle | July 26, 2019</li>
      </ul>
      <ul className="mt-2">
        <li>The Importance of Women in Technology</li>
        <li className="text-xs">Adobe, Seattle | August 23, 2018</li>
      </ul>
      <h2 class="font-bold text-xl mt-2 mb-2">Topics</h2>
      <ul>
        <li>Coming soon! 😉</li>
      </ul>
    </>
  )
}

export default function Speaking() {
  return <div className="dark:bg-gray-900 dark:text-gray-100">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Speaking - Locksley Kolakowski</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
        crossorigin="anonymous"
      />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <link href="/assets/style.css" rel="stylesheet" />
      {/* <link rel="shortcut icon" type="image/png" href="../static/favicon.png" /> */}
    </Helmet>
    <Layout sidebarContent={<SidebarContent />}>
      <h1 className="font-bold text-3xl">Let's collaborate!</h1>
      <br />
      <p>Thank you so much for thinking about me for your next event! Public speaking is my passion, and I love sharing it with others.</p>
      <p className="mt-4">I have spoken at events as intimate as 20 and as large as 1,000. My current experience makes me a good speaker for students, and I can give a technical or non-technical talk for any occasion.</p>
      <p className="mt-4">If you think I would be a good fit for your event or would like to learn more, you can email me personally at locksleylk@gmail.com.</p>
    </Layout>
  </div>
}