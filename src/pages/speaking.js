import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import talks from "../components/talks"
import moment from "moment"

import Form from '../components/form'

function SidebarContent(props) {
  return (
    <>
      <h2 class="font-bold text-xl mb-2">Upcoming Talks</h2>
      <ul>
        {talks.filter(item => moment().isBefore(item.date)).map(item => <li>
          <div className="mt-2">{item.title}</div>
          <div className="text-xs"><a href={item.eventLink} target="_blank" className=" hover:text-green-600">{item.event}</a> | {item.date}</div>
        </li>)}
      </ul>

      <h2 class="font-bold text-xl mt-2 mb-2">Past Talks</h2>
      <ul>
        {talks.filter(item => moment().isAfter(item.date)).map(item => <li>
          <div className="mt-2">{item.title}</div>
          <div className="text-xs"><a href={item.eventLink} target="_blank" className=" hover:text-green-600">{item.event}</a> | {item.date}</div>
        </li>)}
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

      <h2 className="font-bold text-2xl mt-8">Check out some of my past recordings!</h2>
      <h3 className="font-bold text-xl mt-6">Tech talks</h3>
      <div className="mt-4 w-full aspect-w-16 aspect-h-9" >
        <iframe className="w-full" src="https://www.youtube.com/embed/5prq8r5qD9s?start=40062" allowFullScreen frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h3 className="font-bold text-xl mt-6">Co-hosting the Global AI Student Conference</h3>
      <div className="mt-4 w-full aspect-w-16 aspect-h-9" >
        <iframe className="w-full" src="https://www.youtube.com/embed/H9byptcGmmg?start=15136" allowFullScreen frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h3 className="font-bold text-xl mt-6">Featured on Hello World</h3>
      <div className="mt-4 w-full aspect-w-16 aspect-h-9" >
        <iframe className="w-full" src="https://channel9.msdn.com/Shows/Hello-World/Hello-World-April-22-2021-Special-Hello-Earth/player" allowFullScreen frameBorder="0" title="Hello World: April 22, 2021 - Special Hello Earth! - Microsoft Channel 9 Video"></iframe>
      </div> </Layout>
  </div>
}