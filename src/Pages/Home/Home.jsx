import React from 'react'
import './Home.css'
import HomeHeaderCarousel from '../../Components/HomeHeaderCarousel/HomeHeaderCarousel'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
export default function Home() {
  return (
   <>
   <HomeHeaderCarousel />
   <SectionTitle subTitle={'What Happens Here'} title={'COFFEE BUILD YOUR BASE.'} titleColor={'black'} />
   </>
  )
}
