import React, { useState, useEffect } from "react"
import Navigation from "./navigation"
import { Link } from "gatsby"
import Footer from "./footer"
import Card from "./card"

export default function Layout(props) {
  return <div className="dark:bg-gray-900 dark:text-gray-100 flex flex-col min-h-screen">
    <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
      <Link to="/"><img className="h-14 w-14 md:h-20 md:w-20 ml-4 rounded-full mt-4 mb-8 shadow-2xl" src="/assets/avatar.jpg" alt="A portrait of Locksley" /></Link>
      <Navigation />
    </div>

    <div className="mt-10 justify-between mx-auto max-w-5xl flex-grow">
      <div className="flex">
        <div class="w-2/3 px-4 text-lg">
          {props.children}
        </div>
        <div className='w-1/3 px-4'>
          <Card>{props.sidebarContent}</Card>
        </div>
      </div>
    </div>
    <Footer />
  </div>
}