import React, { useState, useEffect, useContext } from "react"
import ThemeToggle from './themetoggle'
import { Link } from "gatsby"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Speaking", path: "/speaking" },
];

export default function Navigation() {
  // const [scheme, setScheme] = useState('light')

  const state = useContext(GlobalStateContext)

  const scheme = state.theme

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.add('dark:bg-gray-900')

    if (scheme === 'dark') {
      document.documentElement.classList.add('scheme-dark')
      document.documentElement.classList.add('bg-gray-900')
    } else {
      document.documentElement.classList.remove('scheme-dark')
      document.documentElement.classList.remove('bg-gray-900')
    }
  }, [scheme])

  return (
    <div className="container mx-auto px-4 my-8 text-gray-900 dark:text-gray-100 max-w-5xl">
      <div className="flex justify-end text-xl">

        <header>
          <div className="flex items-center justify-between">
            <div className={hamburgerMenuOpen ? "" : "hidden sm:block"}>
              {links.map((link, i) => {
                return (
                  <Link key={i} className="text-black-500 hover:text-green-600 mr-4" to={link.path}>{link.title}</Link>
                )
              })}
            </div>
            <div>
              <button onClick={() => {
                setHamburgerMenuOpen(!hamburgerMenuOpen)
              }} type="button" className="sm:mt-3 mr-2 sm:hidden focus:outline-none text-black-500 hover:text-green-600">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {hamburgerMenuOpen && <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />}
                  {!hamburgerMenuOpen && <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />}
                </svg>
              </button>
            </div>
            <ThemeToggle
              scheme={scheme}
            // onChange={() => setScheme(scheme === 'light' ? 'dark' : 'light')}
            />
          </div>
        </header>


      </div>
    </div >
  )
}


