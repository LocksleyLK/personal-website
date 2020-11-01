import React, { useState, useEffect } from "react"
// import ThemeToggle from './themetoggle'
import { Link, graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import Dump from "./Dump";

function Card(props) {
  return (
    <div class="rounded overflow-hidden shadow-lg dark:bg-gray-800 dark:text-gray-100">
      <Link to={props.link}>
        <img class="w-full" src={props.image} alt={props.alt} />
        <div class="px-6 py-4">
          <p class="text-sm text-green-600 flex items-center font-bold">
            {props.topic}
          </p>
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 dark:text-gray-100 text-base">
            {props.summary}
          </p>
        </div>
        <div class="px-6 pb-4">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="/assets/avatar.jpg" alt="Avatar of Locksley Kolakowski" />
            <div class="text-sm">
              <p class="text-gray-900 dark:text-gray-100 leading-none">Locksley Kolakowski</p>
              <p class="text-gray-600 dark:text-gray-400">{props.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}


export const query = graphql`query SITE_INDEX_QUERY {
  allMdx( 
    sort: { fields: [frontmatter___date], order: DESC } 
    filter: { frontmatter: { published: { eq: true } } } 
  ) { 
    nodes { 
      id 
      excerpt(pruneLength: 120) 
      frontmatter { 
        title 
        date 
        topic
      } 
      fields {
        slug
      }
    } 
  } 
}`;

export default function Header() {
  const data = useStaticQuery(query);

  return (
    <div className="container mx-auto px-4 my-8 text-gray-900 dark:text-gray-100">
      {/* <Dump data={data} /> */}
      <img className="h-40 w-40 rounded-full mx-auto mt-10 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-22 2xl:mt-24 mb-8 shadow-2xl" src="/assets/avatar.jpg" alt="A portrait of Locksley" />
      <div className="text-center">
        <h1 className="text-4xl"><b>Locksley</b> Kolakowski</h1>
        <h2 className="text-2xl">Data Science Intern at <a href="https://zeitworks.com/" target="_blank" className=" hover:text-green-600">Zeitworks</a></h2>
      </div>
      <ul className="flex justify-center text-2xl mt-2">
        <li className="mr-6">
          <a href="https://www.linkedin.com/in/locksley-kolakowski" target="_blank" className="text-black-500 hover:text-green-600">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
            {/* <span className="label">LinkedIn</span> */}
          </a>
        </li>
        <li>
          <a href="https://github.com/LocksleyLK" target="_blank" className="text-black-500 hover:text-green-600">
            <i class="fab fa-github" aria-hidden="true"></i>
            {/* <span className="label">Github</span> */}
          </a>
        </li>
        <li className="ml-6">
          <a href="https://twitter.com/locksleylk" target="_blank" className="text-black-500 hover:text-green-600">
            <i class="fab fa-twitter" aria-hidden="true"></i>
            {/* <span className="label">Github</span> */}
          </a>
        </li>
      </ul>

      <div className="mt-10 mx-auto max-w-3xl">
        <h2 className="text-2xl">Recent Posts</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-3xl mx-auto mt-4">
          {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => {
            return (
              <Card
                title={frontmatter.title}
                link={fields.slug}
                image="https://tailwindcss.com/img/card-top.jpg"
                alt="Mountain at sunset"
                summary={excerpt}
                date={moment(frontmatter.date, "YYYY-MM-DD").format("LL")}
                topic={frontmatter.topic}
              />
            )
          })}
          {/* <Card title="Getting the best of both worlds from Tailwind cards" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="Combine the templates to make a design that works for you" date="Sep 28, 2020" topic="CSS" />
          <Card title="I'm going to the Grace Hopper conference 2020!" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="I can't wait to network and connect with women in technology 👩‍💻" date="Sep 27, 2020" topic="Social" />
          <Card title="Networking: level up your next virtual meetup" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="Have you heard of Remo? Hint: it is really cool!" date="Sep 26, 2020" topic="Social" />
          <Card title="Automate your website's copyright date" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="JavaScript makes it easy to keep your copyright year current" date="Sep 15, 2020" topic="JavaScript" /> */}
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-3xl">
        <h2 className="text-2xl">Speaking</h2>
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 mt-4">
          <p>
            Anyone can AI with Azure Custom Vision <br>
            </br>
          Granite State Code Camp | November 14, 2020
          </p>

          <p>I'd love to speak at your event! Check out my past talks and availability <Link className="text-black-500 hover:text-green-600" to="../speaking">here</Link>!</p>
        </div>
      </div>
    </div>
  )
}
