import React, { useState, useEffect } from "react"

export default function Card(props) {
  return (
    <div class="rounded overflow-hidden shadow-lg dark:bg-gray-800 dark:text-gray-100">
      <div class="px-6 py-4 text-gray-700 dark:text-gray-100 text-base">
        {props.children}
      </div>
    </div>
  )
}