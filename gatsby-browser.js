import "./src/css/index.css"

import React from "react"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapPageElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}