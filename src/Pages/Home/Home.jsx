import React from 'react'
import './Home.css'
import HomeHeaderCarousel from '../../Components/HomeHeaderCarousel/HomeHeaderCarousel'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import HomeBookTableBoxes from '../../Components/HomeBookTableBoxes/HomeBookTableBoxes'
import BaristaProptiesBoxes from '../../Components/BaristaProptiesBoxes/BaristaProptiesBoxes'
import SvgGen from '../../Components/SvgGen/SvgGen'
import HomeCoffeTools from '../../Components/HomeCoffeTools/HomeCoffeTools'
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
   <div className='homepage-our-application-section position-relative'>
    <SvgGen pos={'top'} />
    <SvgGen pos={'buttom'} />
    <div className="row w-100 h-100">
      <div className="col-12 col-md-6 d-flex-centering ">
<img src="images/home/home-1-img-6.png" className='img-fluid' alt="" />
      </div>
      <div className="col-12 col-md-6 d-flex-centering">
        <div>
        <div className='homepage-our-application-section-subTutle text-light my-4'>Application</div>
        <div className='homepage-our-application-section-title text-light h1 my-5'>USE OUR APPLICATION.</div>
        <div className="borderW30"></div>
        <p className='text-light my-5'>
        Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius.
        </p>
        <button className='homepage-our-application-section-btn mt-3 cp'>Read More</button>
        </div>
      </div>
    </div>
   </div>
   <HomeCoffeTools />
   </>
  )
}
