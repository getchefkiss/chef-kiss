import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <h1>404, page not found!</h1>
      <Link to={-1}>Go back</Link>
    </>
  )
}

export default PageNotFound
