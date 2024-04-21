'use client'
import { useEffect } from 'react'
 
// Notes from Zach:
// global-error.js is only enabled in production. 
// In development, nextjs error overlay will show instead.

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}