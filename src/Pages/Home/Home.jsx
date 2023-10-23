import React from 'react'
import './Home.css'
import HomeHeaderCarousel from '../../Components/HomeHeaderCarousel/HomeHeaderCarousel'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import HomeBookTableBoxes from '../../Components/HomeBookTableBoxes/HomeBookTableBoxes'
import BaristaProptiesBoxes from '../../Components/BaristaProptiesBoxes/BaristaProptiesBoxes'
export default function Home() {
  return (
   <>
   <HomeHeaderCarousel />
   <SectionTitle subTitle={'What Happens Here'} title={'COFFEE BUILD YOUR BASE.'} titleColor={'black'} />
   <div className="home-booktable-section">
    <div className="row w-75 mx-auto py-5">
      <HomeBookTableBoxes type={'persons'} />
      <HomeBookTableBoxes type={'date'} />
      <HomeBookTableBoxes type={'time'} />
      <div className="col-2">
      <button className='gold-btn home-booktable-btn'>Book A Table</button>
      </div>
    </div>
   </div>
   <BaristaProptiesBoxes />
   </>
  )
}
