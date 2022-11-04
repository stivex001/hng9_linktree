import React from 'react'
import Link from '../components/Links/Link'
import Social from '../components/Social/Social'
import User from '../components/User/User'

const Home = () => {
  return (
    <>
    <div className='container'>
        <User />
        <Link />
        <Social/>
    </div>
    <div className='container'>
        
    </div>
    </>
  )
}

export default Home