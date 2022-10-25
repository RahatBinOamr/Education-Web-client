import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className=' text-center'>
          <h2 className='mb-8 '>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className=' mb-8'>
            Sorry, we couldn't find this page.
          </p>
          <Link
            to='/'
            className='px-8 py-3  rounded  '
          >
           <Button> Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage