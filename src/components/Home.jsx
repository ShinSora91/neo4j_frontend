import React from 'react'
import { soraGet } from '../api/soraApi'

const Home = () => {
  const r = soraGet()
  return (
    <div>Home, {r}</div>
  )
}

export default Home