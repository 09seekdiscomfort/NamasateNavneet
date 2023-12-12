import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const errorType = useRouteError();
    console.log('errorType', errorType)
  return (
    <div>
        <h1>NOT FOUND</h1>
    </div>
  )
}

export default Error;
