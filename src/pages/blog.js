import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import { Helmet } from "react-helmet"

function BlogCard(props) {
  return (
    <Link to={props.link}>
      <div class="rounded  w-full lg:flex dark:bg-gray-800 dark:text-gray-100 mt-8 shadow-lg">

        <img class="w-full h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={props.image} alt={props.alt} />
        <div class="overflow-hidden lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-4">
            <p class="text-sm text-green-600 flex items-center font-bold">
              {props.topic}
            </p>
            <div class="text-gray-900 dark:text-gray-100 font-bold text-xl mb-2">{props.title}</div>
            <p class="text-gray-700 dark:text-gray-100 text-base">{props.summary}</p>
          </div>

          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="/assets/avatar.jpg" alt="Avatar of Locksley Kolakowski" />
            <div class="text-sm">
              <p class="text-gray-900 dark:text-gray-100 leading-none">Locksley Kolakowski</p>
              <p class="text-gray-600 dark:text-gray-400">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function SidebarContent(props) {
  return (
    <>
      <h2 class="font-bold text-xl mb-2">Categories</h2>
      <ul>
        <li>Custom Vision</li>
        <li>JavaScript</li>
        <li>Social</li>
      </ul>
      <h2 class="font-bold text-xl mt-2 mb-2">Tags</h2>
      <ul>
        <li>Hackathon</li>
        <li>JavaScript</li>
        <li>Social</li>
        <li>Web Development</li>
      </ul>
      <h2 class="font-bold text-xl mt-2 mb-2">Recent Posts</h2>
      <ul>
        <li>Set up your first Custom Vision Project</li>
        <li className="text-xs">Nov 23, 2020</li>
      </ul>
      <ul className="mt-2">
        <li>I'm going to the Grace Hopper Conference 2020</li>
        <li className="text-xs">Sep 27, 2020</li>
      </ul>
      <ul className="mt-2">
        <li>Automate your website's copyright date</li>
        <li className="text-xs">Sep 15, 2020</li>
      </ul>
    </>
  )
}

export const query = graphql`query SITE_BLOG_QUERY {
  allMdx( 
    sort: { fields: [frontmatter___date], order: DESC } 
    filter: { frontmatter: { published: { eq: true } } } 
  ) { 
    nodes { 
      id 
      excerpt(pruneLength: 110) 
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


export default function Blog() {
  const data = useStaticQuery(query);
  if (!data) {
    return null;
  }

  return <div className="dark:bg-gray-900 dark:text-gray-100">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Blog - Locksley Kolakowski</title>
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
      <h1 className="font-bold text-3xl dark:text-gray-100">Recent articles</h1>

      {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
        <BlogCard
          title={frontmatter.title}
          link={fields.slug}
          image="https://tailwindcss.com/img/card-top.jpg"
          alt="Mountain at sunset"
          summary={excerpt}
          date={moment(frontmatter.date, "YYYY-MM-DD").format("LL")}
          topic={frontmatter.topic}
        />
      ))}

      {/* <BlogCard title="Getting the best of both worlds from Tailwind cards" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="I combined them to make a design that works best for me" date="Sep 28, 2020" topic="CSS" />
      <BlogCard title="I'm going to the Grace Hopper conference 2020!" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="I can't wait to network and connect with women in technology 👩‍💻" date="Sep 27, 2020" topic="Social" />
      <BlogCard title="Networking: level up your next virtual meetup" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="Have you heard of Remo? Hint: it is really cool!" date="Sep 26, 2020" topic="Social" />
      <BlogCard title="Automate your website's copyright date" image="https://tailwindcss.com/img/card-top.jpg" alt="Mountain at sunset" summary="JavaScript makes it easy to keep your copyright year current" date="Sep 15, 2020" topic="JavaScript" /> */}
    </Layout>
  </div>
}