import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/specialityMenu'
import TopDoctor from '../components/TopDoctor'
import Banner from '../components/banner'
const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu/>
      <TopDoctor/>
      <Banner/>
    </div>
  )
}

export default Home
