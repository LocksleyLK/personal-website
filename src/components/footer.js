import React, { useState, useEffect } from "react"

export default function Footer() {
  return (
    <div className="mt-16 mb-6 mx-auto max-w-3xl flex justify-center text-gray-900 dark:text-gray-100 px-4">
      <span className="text-sm">Copyright &copy; Locksley Kolakowski {new Date().getFullYear()} | All opinions are my own</span>
    </div>
  )
}