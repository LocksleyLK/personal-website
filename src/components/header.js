import React, { useState, useEffect } from "react"
// import ThemeToggle from './themetoggle'
import { Link, graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import talks from "./talks"
import Dump from "./Dump";

function Card(props) {
  return (
    <div class="rounded overflow-hidden shadow-lg dark:bg-gray-800 dark:text-gray-100">
      <Link to={props.link}>
        <div
          className="aspect-w-3 aspect-h-2"
        // style={{
        //   position: "relative",
        //   paddingBottom: "calc(2 / 3 * 100%)",
        // }}
        >
          <img class="w-full" src={props.image} alt={props.alt} />
        </div>
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
        featuredImage
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
      {/* <img className="h-40 w-40 rounded-full mx-auto mt-10 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-22 2xl:mt-24 mb-8 shadow-2xl" src="/assets/avatar.jpg" alt="A portrait of Locksley" /> */}
      <style>
        {`
        #avatar {
          background: url('/assets/avatar.jpg');
          background-repeat: no-repeat;
          background-size: cover;
        }
        #avatar:hover {
          background: url('/assets/avatar-bit.png');
          background-repeat: no-repeat;
          background-size: cover;
        }
        `}
      </style>
      <div id="avatar" className="h-40 w-40 rounded-full mx-auto mt-10 sm:mt-16 md:mt-18 lg:mt-20 xl:mt-22 2xl:mt-24 mb-8 shadow-2xl" />
      <div className="text-center">
        <h1 className="text-4xl"><b>Locksley</b> Kolakowski</h1>
        <h2 className="text-2xl">Software Architect Analyst at Accenture</h2>
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
          {data.allMdx.nodes.filter((node, i) => i < 4).map(({ excerpt, frontmatter, fields }) => {
            console.log(frontmatter);
            return (
              <Card
                title={frontmatter.title}
                link={fields.slug}
                image={frontmatter.featuredImage || "https://tailwindcss.com/img/card-top.jpg"}
                alt="Mountain at sunset"
                summary={excerpt}
                date={moment(frontmatter.date, "YYYY-MM-DD").format("LL")}
                topic={frontmatter.topic}
              />
            )
          })}
        </div>
        <div className="mt-6 text-right">
          <a href="/blog" className="text-base font-semibold text-green-600 hover:text-green-500">
            Read more articles
          </a>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-3xl">
        <h2 className="text-2xl">Speaking</h2>
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 mt-4">
          <ul>
            {talks.filter(item => moment().isBefore(item.date)).map(item => <li>
              <div className="mt-2">{item.title}</div>
              <div className="text-xs"><a href={item.eventLink} target="_blank" className=" hover:text-green-600">{item.event}</a> | {item.date}</div>
            </li>)}
          </ul>
          <p>I'd love to speak at your event! Check out my past talks and availability <Link className="text-black-500 hover:text-green-600" to="../speaking">here</Link>!</p>
        </div>
      </div>
    </div >
  )
}
